import React from 'react'

export default function DemoFunctionComponent() {
    return ( ///nội dung thẻ chưa trong lệnh return ,lưu ý nội dung phải bao bọc bởi 1 thẻ
        <div className="container bg-dark text-white mt-2">
        <div className="display-4 p-5">
            Component
        </div>
        <div className="p-2 pl-5">
            Nội dung component
        </div>
        </div>
    )
}
