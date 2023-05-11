/* eslint-disable react/jsx-key */
import { Carousel, Card, Col, Row } from 'antd';
import './News.css';
import { kegiatan } from './Constant';

const News = () => {

    const { Meta } = Card;

    return (
        <div className='carousel'>
            <h2 className='judulnews'>HMJ EVENTS</h2>
            <Carousel autoplay>
                <div className='carouseldiv'>
                    <h2 className='carouseltext'>LKMM pra-TD dan EpilionFest 2022</h2>
                    <p>01-02 Oktober 2022</p>
                </div>
                <div className='carouseldiv2'>
                    <h2 className='carouseltext'>LKMM TD 2022</h2>
                    <p>22-23 Oktober 2022</p>
                </div>
                <div className='carouseldiv3'>
                    <h2 className='carouseltext'>English Week XXVII 2022</h2>
                    <p>04 November 2022</p>
                </div>
                <div className='carouseldiv4'>
                    <h2 className='carouseltext'>Evaluasi HMJ EDSA periode 2021/2022</h2>
                    <p>10-12 Januari 2023</p>
                </div>
            </Carousel>

            <div className='upcoming'>
                <h2 style={{ marginTop: 20, backgroundColor: "white", color: 'black' }} className='judulnews'>Upcoming Events</h2>
                <div style={{ marginTop: 50 }}>
                    <Row gutter={10} justify={'center'}>
                        {kegiatan.map((item) => (
                            <Col span={5}>
                                <Card
                                    hoverable
                                    style={{
                                        width: 200,
                                        height: 400
                                    }}
                                    className='cardevent'
                                    cover={<img style={{ height: 300, width: 200 }} alt="example" src={item.gambar} />}
                                >
                                    <Meta title={item.judul} description={item.tanggal} />
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default News;
