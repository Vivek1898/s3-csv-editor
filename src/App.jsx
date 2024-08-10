import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import FileList from './FileList';
import CsvEditor from './CsvEditor';
import UploadFile from './UploadFile';

const { Header, Content } = Layout;

function App() {
    const detectDefaultSelectedKeys = () => {
        const path = window.location.pathname;
        if (path === '/upload') {
            return ['2'];
        }
        return ['1'];
    }
    return (
        <Router>
            <Layout className="layout">
                <Header>
                    <div className="logo" style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>S3 CSV</div>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={detectDefaultSelectedKeys()}>
                        <Menu.Item key="1">
                            <Link to="/">Files</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/upload">Upload File</Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px', marginTop: '20px' }}>
                    <Routes>
                        <Route path="/" element={<FileList />} />
                        <Route path="/edit" element={<CsvEditor />} />
                        <Route path="/upload" element={<UploadFile />} />
                    </Routes>
                </Content>
            </Layout>
        </Router>
    );
}

export default App;
