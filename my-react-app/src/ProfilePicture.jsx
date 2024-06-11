import imageUrl from "./assets/Asuna.jpg" // 导入图片资源

function ProfilePicture(){
    
    // 定义点击事件
  const handleClick = (e) => e.target.style.display = "none" // 用于测试点击事件
  // 使用 flex 布局使图片居中
  return (
    <div className="flex justify-center h-screen"> {/* h-screen 用于示例，确保父容器有足够的高度 */}
      <img onClick={(e)=>handleClick(e)} src={imageUrl} alt="profile" className="w-16 h-16 object-cover rounded-full m-5" />
    </div>
  );
}

export default ProfilePicture;