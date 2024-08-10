import  { useState } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

function UploadFile() {
    const [loading, setLoading] = useState(false);

    const handleUpload = ({ file }) => {
        setLoading(true);
        const formData = new FormData();
        formData.append('file', file);

        fetch('http://localhost:8000/upload', {  // Adjust the port if needed
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                if (data.message === "File uploaded successfully") {
                    message.success('File uploaded successfully!');
                } else {
                    message.error('Error uploading file!');
                }
            })
            .catch(error => {
                message.error('Error uploading file!');
                console.error('Error uploading file:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div>
            <h2>Upload a new CSV file</h2>
            <Upload customRequest={handleUpload} showUploadList={false}>
                <Button icon={<UploadOutlined />} loading={loading}>Click to Upload</Button>
            </Upload>
        </div>
    );
}

export default UploadFile;
