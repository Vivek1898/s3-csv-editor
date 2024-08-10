import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Table, Button, Input, Collapse, Row, Col, Spin, Switch} from 'antd';
import './App.css';

const {Panel} = Collapse;
const {Search} = Input;

function FileList() {
    const [files, setFiles] = useState({});
    const [searchTerm, setSearchTerm] = useState("");
    const [loadingFiles, setLoadingFiles] = useState(false);
    const [showOnlyCSV, setShowOnlyCSV] = useState(false);

    useEffect(() => {
        setLoadingFiles(true);
        fetch("http://localhost:8000/files")
            .then(response => response.json())
            .then(data => {
                if (data.data) {
                    setFiles(data.data);
                }
            })
            .catch(error => {
                console.error('Error fetching file list:', error);
            })
            .finally(() => {
                setLoadingFiles(false);
            });
    }, []);

    const renderFilesTable = (files) => (
        <Table
            dataSource={files.map((file, index) => ({
                key: index,
                name: file.name,
                fileKey: file.key,
                lastModified: file.last_modified,
            }))}
            columns={[
                {title: 'File Name', dataIndex: 'name', key: 'name'},
                {title: 'File Key', dataIndex: 'fileKey', key: 'fileKey'},
                {title: 'Last Modified', dataIndex: 'lastModified', key: 'lastModified'},
                {
                    title: 'Actions',
                    dataIndex: 'fileKey',
                    key: 'actions',
                    render: (text, record) => (
                        <Link to={`/edit?fileKey=${record.fileKey}`}>
                            <Button type="primary">Open</Button>
                        </Link>
                    ),
                },
            ]}
            pagination={false}
        />
    );

    const filteredFiles = Object.keys(files).reduce((acc, key) => {
        let filtered = files[key].filter(file =>
            file.key && file.key.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (showOnlyCSV) {
            filtered = filtered.filter(file => file.key && file.key.toLowerCase().endsWith('.csv'));
        }

        if (key === "files_without_folder" || key.toLowerCase().includes(searchTerm.toLowerCase())) {
            acc[key] = filtered;
        } else {
            acc[key] = filtered;
        }
        return acc;
    }, {});

    return (
        <div>
            {loadingFiles ? (
                <Spin size="large" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',

                }}/>
            ) : (
                <Row gutter={[16, 16]}>
                    <Col span={24}>
                        <Row justify="space-between" align="middle" style={{marginBottom: 20}}>
                            <Col>
                                <Search
                                    placeholder="Search files"
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    style={{marginRight: 20}}
                                />
                            </Col>
                            <Col>
                                Show only CSV files:
                                <Switch
                                    checked={showOnlyCSV}
                                    onChange={setShowOnlyCSV}
                                />
                            </Col>
                        </Row>
                        <Collapse accordion>
                            {Object.keys(filteredFiles).map((folder, index) => (
                                <Panel
                                    header={`${folder === "files_without_folder" ? "Files Without Folder" : folder} (${filteredFiles[folder].length})`}
                                    key={index}>
                                    {loadingFiles ? <Spin/> : renderFilesTable(filteredFiles[folder])}
                                </Panel>
                            ))}
                        </Collapse>
                    </Col>
                </Row>
            )}
        </div>
    );
}

export default FileList;
