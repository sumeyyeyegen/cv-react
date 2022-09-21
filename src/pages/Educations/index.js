import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../../components/Title'

function Educations() {
  return (
    <div className='card text-start mt-5 mb-5 p-4'>
      <div className="card-content">
        <Title title="EĞİTİMLER" />
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="card p-3">
              <p className='paragraph'><strong>Okul:</strong>MANİSA CELAL BAYAR ÜNİVERSİTESİ</p>
              <p className='paragraph'><strong>Bölüm:</strong>Yazılım Mühendisliği</p>
              <p className='paragraph'><strong>Tarih:</strong>Eylül 2016-Haziran 2020</p>
              <Link className='btn view'> Görüntüle</Link>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card p-3">
              <p className='paragraph'><strong>Okul:</strong>MANİSA CELAL BAYAR ÜNİVERSİTESİ</p>
              <p className='paragraph'><strong>Bölüm:</strong>Yazılım Mühendisliği</p>
              <p className='paragraph'><strong>Tarih:</strong>Eylül 2016-Haziran 2020</p>
              <Link className='view btn'> Görüntüle</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Educations