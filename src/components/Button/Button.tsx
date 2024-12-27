import React from 'react'
import "./Button.css"


/*
Phần này chỉ là test thôi nhé, không cần thiết lắm
*/


interface ButtonProps {
    text: string;
    // onClick?: () => void: Thuộc tính onClick là tùy chọn (?), là một hàm không nhận tham số và không trả về giá trị (kiểu void)
    onClick?: () => void;
    // type?: 'button' | 'submit': Thuộc tính type cũng là tùy chọn (?), chỉ nhận giá trị 'button' hoặc 'submit'. Nếu không được cung cấp, giá trị mặc định sẽ là 'button'
    type ?: 'button' | 'submit';
    className?: string;
    id?: string;
}

// React.FC là viết tắt của React Function Component, và <ButtonProps> là kiểu của props mà component sẽ nhận.
// ({ text, onClick, type = 'button' }): Sử dụng destructuring để lấy các thuộc tính text, onClick, và type từ props. Ở đây, giá trị mặc định của type là 'button'
export const Button: React.FC<ButtonProps> = ({ text, onClick, type = 'button', className, id }) => {

  return (
    <button type={type} onClick={onClick} className={className} id={id}>
        {text}
    </button>
  )
}

export default Button;
