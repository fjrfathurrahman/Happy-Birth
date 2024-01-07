import { ThreeDots } from "react-loader-spinner";

export default function LoadingLayout() {
  return (
    <div className="flex border justify-center items-center min-h-screen flex-col">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#3da9fc"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
