import React from 'react'

const Detail = (props) => {
  const detail =  props.data ? props.data.detail : null
  const condition = props.data ? props.data.condition : null
  return (
    <div className="container mt-5">
      <div>
        <h2 className="text-highlight detail-title">มาตรการส่งเสริมการบริโภค<br/>ในประเทศ "ชิมช้อปใช้"</h2>
      </div>

      <div className="mt-5">
        <span className="text-detail" dangerouslySetInnerHTML={{__html: detail}}></span>
      </div>


      <div className="mt-5">
        <span className="text-detail font-weight-bold">เงื่อนไขการเข้าร่วมมาตรการ</span>
      </div>

      <div className="mt-5">
        <span className="text-detail" dangerouslySetInnerHTML={{__html: condition}}></span>
      </div>




    </div>
  )
}

export default Detail
