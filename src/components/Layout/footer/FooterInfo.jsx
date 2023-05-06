/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../../assets/EDSA logo baru item.png';
import './Footer.css'
import { InstagramFilled, YoutubeFilled } from '@ant-design/icons';

const FooterInfo = () => {
    return (
        <div className='info'>
            <img className='logofooter' src={logo} alt='logo edsa' />
            <div className='alamat'>
                <p style={{
                    fontSize: 18,
                }}><b>Universitas Negeri Surabaya</b><br /><b>Fakultas Bahasa dan Seni</b></p>
                <p className='jalan'>Jl. Raya Kampus Unesa, Lidan Wetan, Kec. Lakarsantri, Kota Surabaya, Jawa Timur<br />60213</p>
                <p style={{
                    fontSize: 18,
                }}><b>CONTACT US</b></p>
                <ul className='linksosmed'>
                    <a className='sosmed' href="https://instagram.com/edsaunesa" rel='noopener noreferrer' target='_blank'><InstagramFilled style={{ fontSize: 20 }} /></a>
                    <a className='sosmed' href="https://youtube.com/@edsaunesa6924" rel='noopener noreferrer' target='_blank'><YoutubeFilled style={{ fontSize: 20 }} /></a>
                </ul>
            </div>
        </div>
    );
}

export default FooterInfo;
