// import React, { useEffect, useState } from 'react';
// import Papa from 'papaparse';
// import { useLocation } from 'react-router-dom';
// import { Table, Button, Input, Row, Col, Spin, message } from 'antd';
// import './App.css';
//
// function useQuery() {
//     return new URLSearchParams(useLocation().search);
// }
//
// function CsvEditor() {
//     const query = useQuery();
//     const fileKey = query.get('fileKey');
//     console.log(fileKey);
//     const [csvData, setCsvData] = useState([]);
//     const [editedCsvData, setEditedCsvData] = useState([]);
//     const [loadingFileContent, setLoadingFileContent] = useState(false);
//     const [savingFile, setSavingFile] = useState(false);
//
//     useEffect(() => {
//         setLoadingFileContent(true);
//         fetch(`http://localhost:8000/download?key=${fileKey}`)
//             .then(response => response.json())
//             .then(data => {
//                 if (data.file_content) {
//                     Papa.parse(data.file_content, {
//                         complete: (result) => {
//                             setCsvData(result.data);
//                             setEditedCsvData(result.data);
//                         },
//                         header: false,
//                     });
//                 }
//             })
//             .catch(error => {
//                 console.error('Error downloading file:', error);
//             })
//             .finally(() => {
//                 setLoadingFileContent(false);
//             });
//     }, [fileKey]);
//
//     const handleEditChange = (rowIndex, columnIndex, value) => {
//         const updatedData = [...editedCsvData];
//         updatedData[rowIndex][columnIndex] = value;
//         setEditedCsvData(updatedData);
//     };
//
//     const handleSave = () => {
//         setSavingFile(true);
//         const csvString = Papa.unparse(editedCsvData);
//         const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
//         const formData = new FormData();
//         formData.append('file', blob, fileKey);
//
//         fetch(`http://localhost:8000/update/file/v2?file_key=${fileKey}`, {  // Adjust the port if needed
//             method: 'PUT',
//             body: formData,
//         })
//             .then(response => response.json())
//             .then(data => {
//                 if (data.message === "File updated successfully") {
//                     message.success('File saved successfully!');
//                 } else {
//                     message.error('Error saving file!');
//                 }
//             })
//             .catch(error => {
//                 message.error('Error saving file!');
//                 console.error('Error saving file:', error);
//             })
//             .finally(() => {
//                 setSavingFile(false);
//             });
//     };
//
//     const addRow = () => {
//         const newRow = new Array(csvData[0].length).fill("");
//         setEditedCsvData([...editedCsvData, newRow]);
//     };
//
//     const addColumn = () => {
//         const newColumnTitle = `Column ${csvData[0].length + 1}`;
//         const updatedData = editedCsvData.map((row, rowIndex) => {
//             if (rowIndex === 0) {
//                 return [...row, newColumnTitle];
//             }
//             return [...row, ""];
//         });
//         setCsvData(updatedData); // Update the original csvData as well
//         setEditedCsvData(updatedData);
//     };
//
//     const deleteRow = (rowIndex) => {
//         const updatedData = editedCsvData.filter((_, index) => index !== rowIndex + 1);
//         setEditedCsvData(updatedData);
//     };
//
//     const deleteColumn = (colIndex) => {
//         const updatedData = editedCsvData.map(row => row.filter((_, index) => index !== colIndex));
//         setEditedCsvData(updatedData);
//     };
//
//     return (
//         <div>
//             <h2>Editing file: {fileKey}</h2>
//             {loadingFileContent ? (
//                 <Spin />
//             ) : (
//                 <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
//                     <Col span={24}>
//                         <Button onClick={addRow} style={{ marginBottom: 10 }}>Add Row</Button>
//                         <Button onClick={addColumn} style={{ marginBottom: 10, marginLeft: 10 }}>Add Column</Button>
//                         <Table
//                             dataSource={editedCsvData.slice(1).map((row, rowIndex) => ({
//                                 key: rowIndex,
//                                 ...row.reduce((acc, col, colIndex) => ({ ...acc, [editedCsvData[0][colIndex]]: col }), {}),
//                             }))}
//                             columns={editedCsvData?.[0]?.map((col, colIndex) => ({
//                                 title: (
//                                     <div>
//                                         {col} <Button size="small" onClick={() => deleteColumn(colIndex)}>Delete</Button>
//                                     </div>
//                                 ),
//                                 dataIndex: col,
//                                 key: colIndex,
//                                 render: (text, record, rowIndex) => (
//                                     <Input
//                                         value={text}
//                                         onChange={(e) => handleEditChange(rowIndex + 1, colIndex, e.target.value)}
//                                     />
//                                 ),
//                             }))}
//                             pagination={false}
//                             footer={() => (
//                                 <div>
//                                     <Button onClick={handleSave} type="primary" loading={savingFile}>Save</Button>
//                                 </div>
//                             )}
//                         />
//                     </Col>
//                 </Row>
//             )}
//         </div>
//     );
// }
//
// export default CsvEditor;

// import React, { useEffect, useState } from 'react';
// import Papa from 'papaparse';
// import { useLocation } from 'react-router-dom';
// import { Table, Button, Input, Row, Col, Spin, message } from 'antd';
// import './App.css';
//
// function useQuery() {
//     return new URLSearchParams(useLocation().search);
// }
//
// function CsvEditor() {
//     const query = useQuery();
//     const fileKey = query.get('fileKey');
//     const [csvData, setCsvData] = useState([]);
//     const [editedCsvData, setEditedCsvData] = useState([]);
//     const [loadingFileContent, setLoadingFileContent] = useState(false);
//     const [savingFile, setSavingFile] = useState(false);
//
//     useEffect(() => {
//         setLoadingFileContent(true);
//         fetch(`http://localhost:8000/download?key=${fileKey}`)
//             .then(response => response.json())
//             .then(data => {
//                 if (data.file_content) {
//                     Papa.parse(data.file_content, {
//                         complete: (result) => {
//                             setCsvData(result.data);
//                             setEditedCsvData(result.data);
//                         },
//                         header: false,
//                     });
//                 }
//             })
//             .catch(error => {
//                 console.error('Error downloading file:', error);
//             })
//             .finally(() => {
//                 setLoadingFileContent(false);
//             });
//     }, [fileKey]);
//
//     const handleEditChange = (rowIndex, columnIndex, value) => {
//         const updatedData = [...editedCsvData];
//         updatedData[rowIndex][columnIndex] = value;
//         setEditedCsvData(updatedData);
//     };
//
//     const handleSave = () => {
//         setSavingFile(true);
//         const csvString = Papa.unparse(editedCsvData);
//         const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
//         const formData = new FormData();
//         formData.append('file', blob, fileKey);
//
//         fetch(`http://localhost:8000/update/file/v2?file_key=${fileKey}`, {
//             method: 'PUT',
//             body: formData,
//         })
//             .then(response => response.json())
//             .then(data => {
//                 if (data.message === "File updated successfully") {
//                     message.success('File saved successfully!');
//                 } else {
//                     message.error('Error saving file!');
//                 }
//             })
//             .catch(error => {
//                 message.error('Error saving file!');
//                 console.error('Error saving file:', error);
//             })
//             .finally(() => {
//                 setSavingFile(false);
//             });
//     };
//
//     const addRow = () => {
//         const newRow = new Array(editedCsvData[0].length).fill("");
//         setEditedCsvData([...editedCsvData, newRow]);
//     };
//
//     const addColumn = () => {
//         const newColumnTitle = `Column ${editedCsvData[0].length + 1}`;
//         const updatedData = editedCsvData.map((row, rowIndex) => {
//             if (rowIndex === 0) {
//                 return [...row, newColumnTitle];
//             }
//             return [...row, ""];
//         });
//         setEditedCsvData(updatedData);
//     };
//
//     const deleteRow = (rowIndex) => {
//         const updatedData = editedCsvData.filter((_, index) => index !== rowIndex + 1);
//         setEditedCsvData(updatedData);
//     };
//
//     const deleteColumn = (colIndex) => {
//         const updatedData = editedCsvData.map(row => row.filter((_, index) => index !== colIndex));
//         setEditedCsvData(updatedData);
//     };
//
//     const columns = editedCsvData?.[0]?.map((col, colIndex) => ({
//         title: (
//             <div>
//                 {col} <Button size="small" onClick={() => deleteColumn(colIndex)}>Delete</Button>
//             </div>
//         ),
//         dataIndex: colIndex,
//         key: colIndex,
//         render: (text, record, rowIndex) => (
//             <Input
//                 value={text}
//                 onChange={(e) => handleEditChange(rowIndex + 1, colIndex, e.target.value)}
//             />
//         ),
//     })) || [];
//
//     const dataSource = editedCsvData.slice(1).map((row, rowIndex) => ({
//         key: rowIndex,
//         ...row.reduce((acc, col, colIndex) => ({ ...acc, [colIndex]: col }), {}),
//     }));
//
//     return (
//         <div>
//             <h2>Editing file: {fileKey}</h2>
//             {loadingFileContent ? (
//                 <Spin />
//             ) : (
//                 <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
//                     <Col span={24}>
//                         <Button onClick={addRow} style={{ marginBottom: 10 }}>Add Row</Button>
//                         <Button onClick={addColumn} style={{ marginBottom: 10, marginLeft: 10 }}>Add Column</Button>
//                         <Table
//                             dataSource={dataSource}
//                             columns={columns}
//                             pagination={false}
//                             footer={() => (
//                                 <div>
//                                     <Button onClick={handleSave} type="primary" loading={savingFile}>Save</Button>
//                                 </div>
//                             )}
//                         />
//                     </Col>
//                 </Row>
//             )}
//         </div>
//     );
// }
//
// export default CsvEditor;
//


// import React, { useEffect, useState } from 'react';
// import Papa from 'papaparse';
// import { useLocation } from 'react-router-dom';
// import { Table, Button, Input, Row, Col, Spin, message } from 'antd';
// import './App.css';
//
// function useQuery() {
//     return new URLSearchParams(useLocation().search);
// }
//
// function CsvEditor() {
//     const query = useQuery();
//     const fileKey = query.get('fileKey');
//     const [csvData, setCsvData] = useState([]);
//     const [editedCsvData, setEditedCsvData] = useState([]);
//     const [loadingFileContent, setLoadingFileContent] = useState(false);
//     const [savingFile, setSavingFile] = useState(false);
//
//     useEffect(() => {
//         setLoadingFileContent(true);
//         fetch(`http://localhost:8000/download?key=${fileKey}`)
//             .then(response => response.json())
//             .then(data => {
//                 if (data.file_content) {
//                     Papa.parse(data.file_content, {
//                         complete: (result) => {
//                             setCsvData(result.data);
//                             setEditedCsvData(result.data);
//                         },
//                         header: false,
//                     });
//                 }
//             })
//             .catch(error => {
//                 console.error('Error downloading file:', error);
//             })
//             .finally(() => {
//                 setLoadingFileContent(false);
//             });
//     }, [fileKey]);
//
//     const handleEditChange = (rowIndex, columnIndex, value) => {
//         const updatedData = [...editedCsvData];
//         updatedData[rowIndex][columnIndex] = value;
//         setEditedCsvData(updatedData);
//     };
//
//     const handleSave = () => {
//         setSavingFile(true);
//         const csvString = Papa.unparse(editedCsvData);
//         const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
//         const formData = new FormData();
//         formData.append('file', blob, fileKey);
//
//         fetch(`http://localhost:8000/update/file/v2?file_key=${fileKey}`, {
//             method: 'PUT',
//             body: formData,
//         })
//             .then(response => response.json())
//             .then(data => {
//                 if (data.message === "File updated successfully") {
//                     message.success('File saved successfully!');
//                 } else {
//                     message.error('Error saving file!');
//                 }
//             })
//             .catch(error => {
//                 message.error('Error saving file!');
//                 console.error('Error saving file:', error);
//             })
//             .finally(() => {
//                 setSavingFile(false);
//             });
//     };
//
//     const addRow = () => {
//         const newRow = new Array(editedCsvData[0].length).fill("");
//         setEditedCsvData([...editedCsvData, newRow]);
//     };
//
//     const addColumn = () => {
//         const newColumnTitle = `Column ${editedCsvData[0].length + 1}`;
//         const updatedData = editedCsvData.map((row, rowIndex) => {
//             if (rowIndex === 0) {
//                 return [...row, newColumnTitle];
//             }
//             return [...row, ""];
//         });
//         setEditedCsvData(updatedData);
//     };
//
//     const deleteRow = (rowIndex) => {
//         const updatedData = editedCsvData.filter((_, index) => index !== rowIndex + 1);
//         setEditedCsvData(updatedData);
//     };
//
//     const deleteColumn = (colIndex) => {
//         const updatedData = editedCsvData.map(row => row.filter((_, index) => index !== colIndex));
//         setEditedCsvData(updatedData);
//     };
//
//     const handleHeaderEdit = (colIndex, value) => {
//         const updatedData = [...editedCsvData];
//         updatedData[0][colIndex] = value;
//         setEditedCsvData(updatedData);
//     };
//
//     const columns = editedCsvData?.[0]?.map((col, colIndex) => ({
//         title: (
//             <div>
//                 <Input
//                     value={col}
//                     onChange={(e) => handleHeaderEdit(colIndex, e.target.value)}
//                     style={{ width: '80%' }}
//                 />
//                 <Button size="small" onClick={() => deleteColumn(colIndex)} style={{ marginLeft: '10px' }}>Delete</Button>
//             </div>
//         ),
//         dataIndex: colIndex,
//         key: colIndex,
//         render: (text, record, rowIndex) => (
//             <Input
//                 value={text}
//                 onChange={(e) => handleEditChange(rowIndex + 1, colIndex, e.target.value)}
//             />
//         ),
//     })) || [];
//
//     const dataSource = editedCsvData.slice(1).map((row, rowIndex) => ({
//         key: rowIndex,
//         ...row.reduce((acc, col, colIndex) => ({ ...acc, [colIndex]: col }), {}),
//     }));
//
//     return (
//         <div>
//             <h2>Editing file: {fileKey}</h2>
//             {loadingFileContent ? (
//                 <Spin />
//             ) : (
//                 <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
//                     <Col span={24}>
//                         <Button onClick={addRow} style={{ marginBottom: 10 }}>Add Row</Button>
//                         <Button onClick={addColumn} style={{ marginBottom: 10, marginLeft: 10 }}>Add Column</Button>
//                         <Table
//                             dataSource={dataSource}
//                             columns={columns}
//                             pagination={false}
//                             footer={() => (
//                                 <div>
//                                     <Button onClick={handleSave} type="primary" loading={savingFile}>Save</Button>
//                                 </div>
//                             )}
//                             rowKey={(record, index) => index}
//                             rowClassName={(record, index) => "editable-row"}
//                             onRow={(record, rowIndex) => ({
//                                 onDoubleClick: () => deleteRow(rowIndex)
//                             })}
//                         />
//                     </Col>
//                 </Row>
//             )}
//         </div>
//     );
// }
//
// export default CsvEditor;


import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { useLocation } from 'react-router-dom';
import { Table, Button, Input, Row, Col, Spin, message } from 'antd';
import './App.css';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function CsvEditor() {
    const query = useQuery();
    const fileKey = query.get('fileKey');
    const [csvData, setCsvData] = useState([]);
    const [editedCsvData, setEditedCsvData] = useState([]);
    const [loadingFileContent, setLoadingFileContent] = useState(false);
    const [savingFile, setSavingFile] = useState(false);

    useEffect(() => {
        setLoadingFileContent(true);
        fetch(`http://localhost:8000/download?key=${fileKey}`)
            .then(response => response.json())
            .then(data => {
                if (data.file_content) {
                    Papa.parse(data.file_content, {
                        complete: (result) => {
                            setCsvData(result.data);
                            setEditedCsvData(result.data);
                        },
                        header: false,
                    });
                }
            })
            .catch(error => {
                console.error('Error downloading file:', error);
            })
            .finally(() => {
                setLoadingFileContent(false);
            });
    }, [fileKey]);

    const handleEditChange = (rowIndex, columnIndex, value) => {
        const updatedData = [...editedCsvData];
        updatedData[rowIndex][columnIndex] = value;
        setEditedCsvData(updatedData);
    };

    const handleSave = () => {
        setSavingFile(true);
        const csvString = Papa.unparse(editedCsvData);
        const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
        const formData = new FormData();
        formData.append('file', blob, fileKey);

        fetch(`http://localhost:8000/update/file/v2?file_key=${fileKey}`, {
            method: 'PUT',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.message === "File updated successfully") {
                    message.success('File saved successfully!');
                } else {
                    message.error(data?.message || 'Error saving file!')
                }
            })
            .catch(error => {

                message.error('Error saving file!');
                console.error('Error saving file:', error);
            })
            .finally(() => {
                setSavingFile(false);
            });
    };

    const addRow = () => {
        const newRow = new Array(editedCsvData[0].length).fill("");
        setEditedCsvData([...editedCsvData, newRow]);
    };

    const addColumn = () => {
        const newColumnTitle = `Column ${editedCsvData[0].length + 1}`;
        const updatedData = editedCsvData.map((row, rowIndex) => {
            if (rowIndex === 0) {
                return [...row, newColumnTitle];
            }
            return [...row, ""];
        });
        setEditedCsvData(updatedData);
    };

    const deleteRow = (rowIndex) => {
        const updatedData = editedCsvData.filter((_, index) => index !== rowIndex + 1);
        setEditedCsvData(updatedData);
    };

    const deleteColumn = (colIndex) => {
        const updatedData = editedCsvData.map(row => row.filter((_, index) => index !== colIndex));
        setEditedCsvData(updatedData);
    };

    const handleHeaderEdit = (colIndex, value) => {
        const updatedData = [...editedCsvData];
        updatedData[0][colIndex] = value;
        setEditedCsvData(updatedData);
    };

    const columns = [
        ...editedCsvData?.[0]?.map((col, colIndex) => ({
            title: (
                <div>
                    <Input

                        value={col}
                        onChange={(e) => handleHeaderEdit(colIndex, e.target.value)}
                        style={{ width: '50%' }}
                    />
                    <Button size="small" type="primary" onClick={() => deleteColumn(colIndex)} style={{ marginLeft: '10px' }}>Delete Column</Button>
                </div>
            ),
            width: 100,
            dataIndex: colIndex,
            key: colIndex,
            render: (text, record, rowIndex) => (
                <Input
                    value={text}
                    style={{ width: '50%' }}

                    onChange={(e) => handleEditChange(rowIndex + 1, colIndex, e.target.value)}
                />
            ),
        })) || [],
        {
            title: 'Actions',
            key: 'actions',
            fixed: 'right',
            width: 60,
            render: (text, record, rowIndex) => (
                <Button type="primary" onClick={() => deleteRow(rowIndex)}>
                    Delete Row
                </Button>
            ),
        },
    ];

    const dataSource = editedCsvData.slice(1).map((row, rowIndex) => ({
        key: rowIndex,
        ...row.reduce((acc, col, colIndex) => ({ ...acc, [colIndex]: col }), {}),
    }));

    return (
        <div>
            <h2>Editing file: {fileKey}</h2>
            {loadingFileContent ? (
                <Spin />
            ) : (
                <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
                    <Col span={24}>
                        <Button type={"primary"} onClick={addRow} style={{ marginBottom: 10 }}>Add Row</Button>
                        <Button type={"primary"} onClick={addColumn} style={{ marginBottom: 10, marginLeft: 10 }}>Add Column</Button>
                        <Table
                            dataSource={dataSource}
                            columns={columns}
                            pagination={false}
                            footer={() => (
                                <div>
                                    <Button onClick={handleSave} type="primary" loading={savingFile}>Save</Button>
                                </div>
                            )}
                            rowKey={(record, index) => index}
                            scroll={{
                                x: 1500,
                                // y: 300,
                            }}
                        />
                    </Col>
                </Row>
            )}
        </div>
    );
}

export default CsvEditor;
