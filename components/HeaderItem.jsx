const HeaderItem = ({ title, Icon }) => {
  return (
    <div className="group flex flex-col items-center cursor-pointer  w-12 sm:w-20 hover:text-white">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="tracking-widest group-hover:opacity-100 opacity-0 hover:opacity-100">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
