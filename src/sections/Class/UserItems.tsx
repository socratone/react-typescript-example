import User from './User';

type UserItemsProps = {
  items: User[];
};

const UserItems = ({ items }: UserItemsProps) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.name}>{item.name}</li>
      ))}
    </ul>
  );
};

export default UserItems;
