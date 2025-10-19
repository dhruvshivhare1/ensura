'use client';

import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function TestFirebase() {
  const [testData, setTestData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const testConnection = async () => {
    try {
      setLoading(true);
      setMessage('Testing Firebase connection...');
      
      // Test adding a document
      const docRef = await addDoc(collection(db, 'test'), {
        message: 'Hello Firebase!',
        timestamp: new Date(),
        test: true
      });
      
      setMessage(`✅ Success! Document added with ID: ${docRef.id}`);
      
      // Test reading documents
      const querySnapshot = await getDocs(collection(db, 'test'));
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      setTestData(data);
      
    } catch (error) {
      setMessage(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      console.error('Firebase test error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Firebase Connection Test</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button 
          onClick={testConnection} 
          disabled={loading}
          className="w-full"
        >
          {loading ? 'Testing...' : 'Test Firebase Connection'}
        </Button>
        
        {message && (
          <div className={`p-3 rounded-md text-sm ${
            message.includes('✅') ? 'bg-green-100 text-green-800' : 
            message.includes('❌') ? 'bg-red-100 text-red-800' : 
            'bg-blue-100 text-blue-800'
          }`}>
            {message}
          </div>
        )}
        
        {testData.length > 0 && (
          <div>
            <h4 className="font-medium mb-2">Test Documents:</h4>
            <div className="space-y-2">
              {testData.map((doc, index) => (
                <div key={doc.id} className="p-2 bg-gray-100 rounded text-sm">
                  <div><strong>ID:</strong> {doc.id}</div>
                  <div><strong>Message:</strong> {doc.message}</div>
                  <div><strong>Time:</strong> {new Date(doc.timestamp?.seconds * 1000).toLocaleString()}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

