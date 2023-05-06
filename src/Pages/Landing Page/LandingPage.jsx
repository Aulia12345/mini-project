/* eslint-disable react/jsx-key */
import './LandingPage.css';
import { Card, Col, Row, Button } from 'antd'
import { InstagramOutlined, YoutubeOutlined } from '@ant-design/icons'
import { Prodi, Bph } from './Constant';
import logo from '../../assets/EDSA logo baru item.png'
import Arrow from '../../components/arrow/arrow';
import wave from '../../assets/wave.png'

const LandingPage = () => {
    return (
        <div className='main'>
            <section className='section'>
                <div className='judul'>
                    <div className='judulAnim'>
                        <p className='judul1'><b>Welcome in our website</b></p>
                        <h1 className='judul2'>HIMPUNAN MAHASISWA JURUSAN BAHASA DAN SASTRA INGGRIS</h1>
                        <h2 className='judul2'>ENGLISH DEPARTMENT STUDENT ASSOCIATION<br />(EDSA)</h2>
                        <p className='judul4'>Fakultas Bahasa dan Seni <br /> Universitas Negeri Surabaya</p>
                        <div className='link'>
                            <a href="https://instagram.com/edsaunesa" rel='noopener noreferrer' target='_blank'><InstagramOutlined style={{ fontSize: 20 }} /></a>
                            <a href="https://youtube.com/@edsaunesa6924" rel='noopener noreferrer' target='_blank'><YoutubeOutlined style={{ fontSize: 20 }} /></a>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section2'>
                <h2 className='judul1'><b>Program Studi di Bahasa dan Sastra Inggris</b></h2>
                <p className='maintext'>Jurusan Bahasa dan Sastra Inggris memiliki dua program studi yang menghasilkan lulusan mahasiswa yang berkualitas di bidangnya.</p>
                <div>
                    <Row className='cardprodi' justify={'center'}>
                        {Prodi.map((item) => (
                            // eslint-disable-next-line react/jsx-key
                            <Col span={10}>
                                <Card className='card' key={item.key}>
                                    <p className='judul5'>{item.title}</p>
                                    <p className='text'>{item.text}</p>
                                    <Button className='button' type="primary" style={{ background: "black", marginTop: 10 }}>more...</Button>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <br />
                    <hr />
                </div>
                <h2 className='judul1'><b>HMJ EDSA UNESA</b></h2>
                <p className='maintext2'>Himpunan Mahasiwa Jurusan Bahasa dan Sastra Inggris atau <i>English Department Student Association</i> (EDSA) merupakan salah satu organisasi kemahasiswaan di bawah naungan Jurusan Bahasa dan Sastra Inggris Universitas Negeri Surabaya. HMJ EDSA memiliki tujuan untuk membantu melancarkan segala kegiatan pendidikan di jurusan dengan ikut memelihara, menumbuhkan, meningkatkan, dan mendayagunakan kemampuan yang ada pada Mahasiswa Jurusan Bahasa dan Sastra Inggris.</p>
            </section >

            <section className='BPH'>
                <div className='visimisi'>
                    <span className='visimisiT'>VISI ORGANISASI</span>
                    <span className='shape'></span>
                    <p className='visimisit'>Mewujudukan Himpunan Mahasiswa Jurusan Bahasa dan Sastra Inggris menjadi Himpunan yang Berkarakter, Aspiratif, Solutif, Kreatof, dan Inovatif. Serta menjunjung tinggi nilai Porfessional, Kekeluargaan, Loyalitas, dan Solidaritas. Juga menjadikan mahasiswa yang partisipatif serta adaptif.</p>
                </div>
                <div className='profilbph'>
                    <h3 className='titlebph'>Ketua dan Wakil Ketua Himpunan Mahasiswa Jurusan Bahasa dan Sastra Inggris 2023</h3>
                    <Row className='bph'>
                        {Bph.map((item) => (
                            <Col>
                                <img className='foto' src={item.foto} alt="" />
                                <p className='jabatan'>{item.title} <br /> <span className='nama'>{item.nama}</span></p>
                            </Col>
                        ))}
                    </Row>
                </div>
                <div className='visimisi'>
                    <span className='visimisiT'>MISI ORGANISASI</span>
                    <span className='shape'></span>
                    <ul className='visimisit'>
                        <li>Membantu menyalurkan, mengasah, dan meningkatkan bakat mahasiswa Bahasa dan Sastra Inggris dalam bidang akademik maupun non-akademik.</li>
                        <li>Meningkatkan peran organisasi sebagai wadah dan penyambung mahasiswa untuk menyampaikan aspirasi, kritik, dan saran, baik untuk ormawa maupun birokrasi.</li>
                        <li>Meningkatkan profesionalisme serta tanggung jawab kerja dan kegiatan intra jurusan maupun kegiatan selingkung Fakultas Bahasa dan Seni.</li>
                        <li>Menjadikan Himpunan Mahasiswa Jurusan Bahasa dan Sastra Inggris menjadi ormawa yang harmonis dan bersinergi untuk jurusan dan ormawa selingkung Fakultas Bahasa dan Seni.</li>
                        <li>Menjungjung tinggi nilai solidaritas dan kekeluargaan antar mahasiswa Bahasa dan Sastra Inggris intra jurusan maupun dalam selingkung Fakultas Bahasa dan Seni.</li>
                    </ul>
                </div>
            </section>
            <img className='wave' src={wave} alt="wave" />

            <section className='artilogo'>
                <h2 className='judul1'>ARTI LOGO HMJ EDSA</h2>
                <img className='logo' src={logo} alt="logo edsa" />
                <Arrow />
                <div className='facing'>
                    <p><b>LION FACING</b> Left-Forward-Right</p>
                    <ul>
                        <li>Symbolizes a <b>FAIR, MODERATE</b> and <b>IMPARTIAL ATTITUDE</b></li>
                        <li>Facing all directions which shows <b>WISDOM</b> in thingking before acting</li>
                    </ul>
                </div>
                <div className='lionn'>
                    <p><b>LION</b></p>
                    <ul>
                        <li><b>COURAGEOUS, TOUGH,</b> and <b>CONFIDENT</b></li>
                        <li><b>FOCUS</b> on <b>PURPOSE</b></li>
                        <li><b>NOT AFRAID</b> to <b>FAIL</b>, even learn from the failure</li>
                    </ul>
                </div>
                <div className='number'>
                    <p><b>THREE LIONS III</b></p>
                    <ul>
                        <li><b>STRENGTH</b></li>
                        <li><b>STABILITY</b></li>
                        <li><b>BALANCE</b></li>
                    </ul>
                </div>
                <div className='crown'>
                    <p><b>CROWN</b></p>
                    <ul>
                        <li>Symbolizes <b>POWER, LEGITIMACY, IMMORTALITY, GLORY</b> and <b>PROSEPRITY</b></li>
                        <li>Thus describing <b>EDSA</b> which will remain <b>VICTORIOUS</b> in <b>ETERNITY</b></li>
                    </ul>
                </div>
                <div className='color'>
                    <p><b>#000 BLACK and #FFF WHITE</b></p>
                    <ul>
                        <li>Symbolizes a <b>NEUTRAL</b> color</li>
                        <li>As a <b>BASIS, BLACK,</b> and <b>WHITE</b> gave birth to other colors</li>
                        <li>Because <b>BLACK</b> and <b>WHITE</b> represent <b>CONTRADICTORY</b> and <b>UNPREDICTABLE</b> realities of life</li>
                        <li><b>BLACK</b> can be combined with any color, where its application to the <b>EDS</b> logo itself has a <b>NEUTRAL</b> and <b>Impartial</b>meaning</li>
                    </ul>
                </div>
            </section>

        </div >
    );
}

export default LandingPage;

