import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
export const menuConfig = [
  {
    id: 1,
    name: "Trang chủ",
    link: "/",
    iconLeft: false,
    iconRight: false,
    children: false,
  },
  {
    id: 2,
    name: "Thể loại",
    link: false,
    iconLeft: false,
    iconRight: faCaretDown,
    children: [
      {
        name: "Đam mỹ",
        link: "/",
      },
      {
        name: "Hài hước",
        link: "/",
      },
      {
        name: "Hành động",
        link: "/",
      },
      {
        name: "Hoạt hình",
        link: "/",
      },
      {
        name: "Kinh dị",
        link: "/",
      },
      {
        name: "Tâm lý",
        link: "/",
      },
      {
        name: "Thiếu mhi",
        link: "/",
      },
      {
        name: "Tình cảm",
        link: "/",
      },
    ],
  },
  {
    id: 3,
    name: "Quốc gia",
    link: false,
    iconLeft: false,
    iconRight: faCaretDown,
    children: [
      {
        name: "Hàn Quốc",
        link: "/",
      },
      {
        name: "Mỹ",
        link: "/",
      },
      {
        name: "Thái Lan",
        link: "/",
      },
      {
        name: "Trung Quốc",
        link: "/",
      },
    ],
  },
  {
    id: 4,
    name: "Phim theo năm",
    link: false,
    iconLeft: false,
    iconRight: faCaretDown,
    children: [
      {
        name: "2006",
        link: "/",
      },
      {
        name: "2008",
        link: "/",
      },
      {
        name: "2014",
        link: "/",
      },
      {
        name: "2017",
        link: "/",
      },
      {
        name: "2018",
        link: "/",
      },
      {
        name: "2019",
        link: "/",
      },
      {
        name: "2020",
        link: "/",
      },
      {
        name: "2022",
        link: "/",
      },
    ],
  },
  {
    id: 5,
    name: "Anime",
    link: false,
    iconLeft: false,
    iconRight: faCaretDown,
    children: [
      {
        name: "Anime bộ",
        link: "/",
      },
      {
        name: "Anime lẻ",
        link: "/",
      },
      {
        name: "anime hành động",
        link: "/",
      },
      {
        name: "Anime Kiếm hiệp",
        link: "/",
      },
    ],
  },
  {
    id: 6,
    name: "Khác",
    link: false,
    iconLeft: false,
    iconRight: faCaretDown,
    children: [
      {
        name: "Phim bộ",
        link: "/",
      },
      {
        name: "Phim lẻ",
        link: "/",
      },
      {
        name: "Phim chiếu rạp",
        link: "/",
      },
      {
        name: "Phim hot",
        link: "/",
      },
      {
        name: "Phim sắp chiếu",
        link: "/",
      },
    ],
  },
  {
    id: 7,
    name: "Liên hệ",
    link: "/",
    iconLeft: false,
    iconRight: false,
    children: false,
  },
];
