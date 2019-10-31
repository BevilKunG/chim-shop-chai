import React from 'react'

const Duration = (props) => {
  const duration = props.data ? props.data.duration : null

  return (
    <div>
      <div className="text-center">
        <div>
          <span>ตั้งแต่วันที่</span>
        </div>

        <div>
          <h2 className="text-highlight">{ duration }</h2>
        </div>
      </div>

      <div className="col-8 mx-auto mt-5">
        <div className="card text-white card-color text-center">
          <div className="card-body">
            <p className="card-text">
            ลงทะเบียน เฟส 2<br/>
            ตั้งแต่วันที่ 24 ต.ค.62 วันละ 2 รอบ เวลา 6.00 และ 18.00 น.<br/>
            (จำกัดจำนวนผู้ลงทะเบียนรอบละ 5 แสนคน รวม 1 ล้านคนต่อวัน)
            </p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Duration
