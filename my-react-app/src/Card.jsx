const Card = () => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-lg p-8 m-2 text-center max-w-[250px] inline-block">
      <img
        src="https://via.placeholder.com/150"
        alt="profile picture"
        className="max-w-[60%] h-auto rounded-[50%] mb-3 m-auto"
      />
      <h2 className="font-serif m-0 text-[#333]">Bro Code</h2>
      <p className="font-mono text-[#666666] ">
        I make Youtebe videos and play video games
      </p>
    </div>
  );
};

export default Card;
