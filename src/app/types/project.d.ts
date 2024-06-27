interface ProjectItemProps {
    index: number;
    title: string;
    link: string;
    work: string;
    manageModal: (active: boolean, index: number, x: number, y: number) => void;
  }