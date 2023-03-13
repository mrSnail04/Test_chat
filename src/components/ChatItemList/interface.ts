export type IChatItemListProps = {
  avatar: string;
  title: string;
  message: string;
  time: Date;
  active: boolean;
  id: string;
  onClick: (id: string) => void;
};