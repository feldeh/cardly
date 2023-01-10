const Flex = ({
  className,
  flexDirection = 'flex-row',
  justifyContent = 'justify-center',
  itemsAlign = 'items-center',
  children,
}) => {
  return (
    <div
      className={`flex-1 flex ${flexDirection} ${justifyContent} ${itemsAlign} ${className}`}
    >
      {children}
    </div>
  );
};

export default Flex;
