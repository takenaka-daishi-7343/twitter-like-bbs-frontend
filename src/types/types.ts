export type Tweet = {
  id: string;
  content: string;
  author: string;
  createdAt: string;
  likeCount: 12;
  retweetCount: 4;
};

export type LikeButtonProps = {
  tweetId: string;
  count: number;
};

export type RetweetButtonProps = {
  tweetId: string;
  count: number;
};

export type UserModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export type TweetFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export type HeaderProps = {
  onToggle: () => void;
};
