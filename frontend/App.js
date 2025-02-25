import React, { useState } from 'react';

function App() {
    const [file, setFile] = useState(null);
    const [cleanedData, setCleanedData] = useState(null);

    const uploadFile = async () => {
        const formData = new FormData();
        formData.append('file', file);
        const response = await fetch('/clean', { method: 'POST', body: formData });
        const data = await response.json();
        setCleanedData(data);
    };

    return (
        <div>
            <h2>AI-Powered Data Cleaning Tool</h2>
            <input type="file" onChange={e => setFile(e.target.files[0])} />
            <button onClick={uploadFile}>Clean Data</button>
            {cleanedData && <pre>{JSON.stringify(cleanedData, null, 2)}</pre>}
        </div>
    );
}

export default App;
