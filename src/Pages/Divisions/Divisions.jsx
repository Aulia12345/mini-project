/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Row, Col, Collapse } from 'antd';
import './Divisions.css';
import { art, bid1, bid2, bph, bphinti, dagri, data, deplu, descbid1, descbid2, descbid3, descbid4, infokom, kesma, log, marketing, mobil, psdm, sport } from './Constant';
import wave from '../../assets/wave.png'

const Divisions = () => {

    const { Panel } = Collapse;

    return (
        <div className='struktural'>
            <div className='titlemainstruktural'>
                <h2 className='titlestruktural'>STRUKTURAL FUNGSIONARIS<br />HMJ EDSA UNESA 2023/2024</h2>
            </div>

            <div className='bphdiv'>
                <p className='titlebphdiv'><b>Badan Pengurus Harian</b></p>
                <div className='shapediv'></div>
                <Row>
                    {bphinti.map((item) => (
                        <Col className={item.div}>
                            <img style={{
                                width: '170px',
                                height: '300px'
                            }} src={item.foto} alt="" />
                            <p className='jabatanbphdiv'>{item.title}<br /> <span className='namabphdiv'>{item.nama}</span></p>
                        </Col>
                    ))}
                </Row>
                <Row>
                    {bph.map((item) => (
                        <Col className={item.div}>
                            <img style={{
                                width: '170px',
                                height: '300px'
                            }} src={item.foto} alt="" />
                            <p className='jabatanbphdiv'>{item.title} <br /> <span className='namabphdiv'>{item.nama}</span></p>
                        </Col>
                    ))}
                </Row>
            </div>
            <div className='bid1'>
                <div className='shapediv2'></div>
                <p className='titlebid1'><b>Bidang Akademik</b></p>
                <div className='shapediv2a'></div>
                <Collapse className='colbid1' colorText='#fff' accordion style={{ width: 1000 }}>
                    {descbid1.map((item) => (
                        <Panel header={item.header} style={{ textAlign: 'startS' }} key={item.key}>
                            <p style={{ textAlign: 'justify' }}>{item.desc}</p>
                        </Panel>
                    ))}
                </Collapse>
                <Row style={{ marginTop: 50 }}>
                    {bid1.map((item) => (
                        <Col className={item.div}>
                            <img style={{
                                width: '170px',
                                height: '300px'
                            }} src={item.foto} alt="" />
                            <p className='jabatanbphdiv'>{item.title}<br /> <span className='namabphdiv'>{item.nama}</span></p>
                        </Col>
                    ))}
                </Row>
                <Row>
                    {psdm.map((item) => (
                        <Col className={item.div}>
                            <img style={{
                                width: '200px',
                                height: '300px'
                            }} src={item.foto} alt="" />
                            <p className='jabatanbphdiv'>{item.title}<br /> <span className='namabphdiv'>{item.nama}</span></p>
                        </Col>
                    ))}
                </Row>
                <Row>
                    {dagri.map((item) => (
                        <Col className={item.div}>
                            <img style={{
                                width: '200px',
                                height: '300px'
                            }} src={item.foto} alt="" />
                            <p className='jabatanbphdiv'>{item.title}<br /> <span className='namabphdiv'>{item.nama}</span></p>
                        </Col>
                    ))}
                </Row>
                <Row>
                    {log.map((item) => (
                        <Col className={item.div}>
                            <img style={{
                                width: '200px',
                                height: '300px'
                            }} src={item.foto} alt="" />
                            <p className='jabatanbphdiv'>{item.title}<br /> <span className='namabphdiv'>{item.nama}</span></p>
                        </Col>
                    ))}
                </Row>
            </div>
            <div className='bid2'>
                <div className='shapediv3'></div>
                <p className='titlebphdiv'><b>Bidang Minat Bakat</b></p>
                <div className='shapediv'></div>
                <Collapse className='colbid1' colorText='#fff' accordion style={{ width: 1000 }}>
                    {descbid2.map((item) => (
                        <Panel header={item.header} style={{ textAlign: 'startS' }} key={item.key}>
                            <p style={{ textAlign: 'justify' }}>{item.desc}</p>
                        </Panel>
                    ))}
                </Collapse>
                <Row style={{ marginTop: 50 }}>
                    {bid2.map((item) => (
                        <Col className={item.div}>
                            <img style={{
                                width: '170px',
                                height: '300px'
                            }} src={item.foto} alt="" />
                            <p className='jabatanbphdiv'>{item.title}<br /> <span className='namabphdiv'>{item.nama}</span></p>
                        </Col>
                    ))}
                </Row>
                <Row style={{ marginTop: 50 }}>
                    {art.map((item) => (
                        <Col className={item.div}>
                            <img style={{
                                width: '170px',
                                height: '300px'
                            }} src={item.foto} alt="" />
                            <p className='jabatanbphdiv'>{item.title}<br /> <span className='namabphdiv'>{item.nama}</span></p>
                        </Col>
                    ))}
                </Row>
                <Row style={{ marginTop: 50 }}>
                    {sport.map((item) => (
                        <Col className={item.div}>
                            <img style={{
                                width: '170px',
                                height: '300px'
                            }} src={item.foto} alt="" />
                            <p className='jabatanbphdiv'>{item.title}<br /> <span className='namabphdiv'>{item.nama}</span></p>
                        </Col>
                    ))}
                </Row>
            </div>
            <div className='bid3'>
                <div className='shapediv2'></div>
                <p className='titlebid1'><b>Bidang Hubungan Mahasiswa</b></p>
                <div className='shapediv2a'></div>
                <Collapse className='colbid1' colorText='#fff' accordion style={{ width: 1000 }}>
                    {descbid3.map((item) => (
                        <Panel header={item.header} style={{ textAlign: 'startS' }} key={item.key}>
                            <p style={{ textAlign: 'justify' }}>{item.desc}</p>
                        </Panel>
                    ))}
                </Collapse>
                <Row style={{ marginTop: 50 }}>
                    {kesma.map((item) => (
                        <Col className={item.div}>
                            <img style={{
                                width: '170px',
                                height: '300px'
                            }} src={item.foto} alt="" />
                            <p className='jabatanbphdiv'>{item.title}<br /> <span className='namabphdiv'>{item.nama}</span></p>
                        </Col>
                    ))}
                </Row>
                <Row style={{ marginTop: 50 }}>
                    {deplu.map((item) => (
                        <Col className={item.div}>
                            <img style={{
                                width: '170px',
                                height: '300px'
                            }} src={item.foto} alt="" />
                            <p className='jabatanbphdiv'>{item.title}<br /> <span className='namabphdiv'>{item.nama}</span></p>
                        </Col>
                    ))}
                </Row>
                <Row style={{ marginTop: 50 }}>
                    {infokom.map((item) => (
                        <Col className={item.div}>
                            <img style={{
                                width: '170px',
                                height: '300px'
                            }} src={item.foto} alt="" />
                            <p className='jabatanbphdiv'>{item.title}<br /> <span className='namabphdiv'>{item.nama}</span></p>
                        </Col>
                    ))}
                </Row>
            </div>
            <div className='bid4'>
                <div className='shapediv3'></div>
                <p className='titlebphdiv'><b>Bidang Ekonomi Kreatif</b></p>
                <div className='shapediv'></div>
                <Collapse className='colbid1' colorText='#fff' accordion style={{ width: 1000 }}>
                    {descbid4.map((item) => (
                        <Panel header={item.header} style={{ textAlign: 'startS' }} key={item.key}>
                            <p style={{ textAlign: 'justify' }}>{item.desc}</p>
                        </Panel>
                    ))}
                </Collapse>
                <Row style={{ marginTop: 50 }}>
                    {marketing.map((item) => (
                        <Col className={item.div}>
                            <img style={{
                                width: '170px',
                                height: '300px'
                            }} src={item.foto} alt="" />
                            <p className='jabatanbphdiv'>{item.title}<br /> <span className='namabphdiv'>{item.nama}</span></p>
                        </Col>
                    ))}
                </Row>
                <Row style={{ marginTop: 50 }}>
                    {data.map((item) => (
                        <Col className={item.div}>
                            <img style={{
                                width: '170px',
                                height: '300px'
                            }} src={item.foto} alt="" />
                            <p className='jabatanbphdiv'>{item.title}<br /> <span className='namabphdiv'>{item.nama}</span></p>
                        </Col>
                    ))}
                </Row>
                <Row style={{ marginTop: 50 }}>
                    {mobil.map((item) => (
                        <Col className={item.div}>
                            <img style={{
                                width: '170px',
                                height: '300px'
                            }} src={item.foto} alt="" />
                            <p className='jabatanbphdiv'>{item.title}<br /> <span className='namabphdiv'>{item.nama}</span></p>
                        </Col>
                    ))}
                </Row>
            </div>
            <img className='wave' src={wave} alt="wave" />
        </div>
    );
}


export default Divisions;
