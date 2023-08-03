import React from "react";

function Form() {
  return (
    <div className="flex items-center justify-center text-gray-700">
      <form className="w-2/6 flex flex-col items-center justify-center">
        <span className="mt-28 w-full text-2xl font-bold">Payments</span>
        <div className="my-10 w-full text-2xl font-bold text-gray-600">
          로그인
        </div>
        <div className="flex flex-col w-full my-2">
          <span className="my-2">이메일주소</span>
          <input
            name="email"
            type="email"
            className="border-2 rounded-lg h-12 px-3"
          />
        </div>
        <div className="flex flex-col w-full my-2">
          <span className="my-2">비밀번호</span>
          <input
            name="password"
            type="password"
            className="border-2 rounded-lg h-12 px-3"
          />
        </div>
        <div className="flex flex-row w-full items-center my-2  hover:text-gray-400 active:text-gray-700">
          <div>
            <span className="cursor-pointer">회원가입</span>
            <span>/</span>
            <span className="cursor-pointer">비밀번호 찾기</span>
          </div>
          <div className="ml-auto">
            <button
              type="submit"
              className="w-20 h-10 cursor-pointer rounded-lg bg-blue-500 text-white hover:bg-blue-700 active:bg-blue-500"
            >
              로그인
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
