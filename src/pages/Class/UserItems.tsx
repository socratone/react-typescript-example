import User from './User';

type UserItemsProps = {
  items: User[];
};

const UserItems = ({ items }: UserItemsProps) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.name}>{item.name}</div>
      ))}
    </div>
  );
};

export default UserItems;
