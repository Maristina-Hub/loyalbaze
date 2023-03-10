import Spring from "../img/Vector3.png";
import Star from "../img/Star 4.png";
import Ball from "../img/ball.png";
import Line_1 from "../img/Vector 263.png";
import Line_2 from "../img/Vector 264.png";
import Line_3 from "../img/Vector 265.png";
import Line_4 from "../img/Vector 266.png";

const signupBG = [
  {
    id: 0,
    ballStyle: {
      width: "200px",
      height: "200px",
      backgroundImage: "url('../img/Ball1.svg')",
      background: " linear-gradient(92.7deg, #5404FF 7.9%, #BA2AD1 88.1%)",
      boxShadow: "inset 2px 4px 100px #001D6E ",
      position: "absolute",
      top: "200px",
      left: "13px",
      borderRadius: "100%",
    },
  },

  {
    id: 1,
    ballStyle: {
      width: "102px",
      height: "102px",
      backgroundImage: "url('../img/Ball1.svg')",
      background: " linear-gradient(92.7deg, #5404FF 7.9%, #BA2AD1 88.1%)",
      boxShadow: "inset 1.02px 2.04px 51px #001D6E ",
      position: "absolute",
      top: "90px",
      right: "290px",
      borderRadius: "100%",
    },
  },
  {
    id: 2,
    ballStyle: {
      backgroundImage: `url(${Ball})`,
      width: "200px",
      height: "400px",
      backgroundColor: "linear-gradient(92.7deg, #5404FF 7.9%, #BA2AD1 88.1%)",
      boxShadow: "inset 4px 8px 200px #001D6E",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "absolute",
      zIndex: "100",
      top: "382px",
      right: "-0px",
      // borderRadius: "50%",
      filter: "blur(15px)",
      borderRadius: " 200px  0  0 200px ",
    },
  },
  {
    id: 3,
    ballStyle: {
      width: "102px",
      height: "102px",
      backgroundImage: "url('../img/Ball1.svg')",
      background: " linear-gradient(92.7deg, #5404FF 7.9%, #BA2AD1 88.1%)",
      boxShadow: "inset 1.02px 2.04px 51px #001D6E",
      position: "absolute",
      top: "1180px",
      right: "1120px",
      borderRadius: "100%",
    },
  },
  {
    id: 4,
    ballStyle: {
      backgroundImage: `url(${Spring})`,
      width: "157.4px",
      height: "126.94px",
      backgroundColor: " linear-gradient(92.7deg, #5404FF 7.9%, #BA2AD1 88.1%)",
      backgroundRepeat: "no-repeat",
      position: "absolute",
      top: "530px",
      right: "220px",
      transform: "rotate(10deg)",
    },
  },
  {
    id: 5,
    ballStyle: {
      backgroundImage: `url(${Star})`,
      width: "32px",
      height: "40px",
      backgroundColor: " linear-gradient(92.7deg, #5404FF 7.9%, #BA2AD1 88.1%)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "absolute",
      top: "110px",
      left: "420px",
      borderRadius: "1px",
    },
  },
  {
    id: 6,
    ballStyle: {
      backgroundImage: `url(${Star})`,
      width: "32px",
      height: "40px",
      backgroundColor: " linear-gradient(92.7deg, #5404FF 7.9%, #BA2AD1 88.1%)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "absolute",
      top: "230px",
      left: "1100px",
      borderRadius: "1px",
    },
  },
  {
    id: 7,
    ballStyle: {
      backgroundImage: `url(${Star})`,
      width: "48px",
      height: "64px",
      backgroundColor: " linear-gradient(92.7deg, #5404FF 7.9%, #BA2AD1 88.1%)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "absolute",
      top: "900px",
      left: "157px",
      borderRadius: "1px",
    },
  },
  {
    id: 8,
    ballStyle: {
      backgroundImage: `url(${Star})`,
      width: "48px",
      height: "64px",
      backgroundColor: " linear-gradient(92.7deg, #5404FF 7.9%, #BA2AD1 88.1%)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "absolute",
      top: "800px",
      left: "1260px",
      borderRadius: "1px",
    },
  },

  {
    id: 9,
    ballStyle: {
      backgroundImage: `url(${Star})`,
      width: "32px",
      height: "40px",
      backgroundColor: " linear-gradient(92.7deg, #5404FF 7.9%, #BA2AD1 88.1%)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "absolute",
      top: "1320px",
      left: "500px",
      borderRadius: "1px",
    },
  },
  {
    id: 10,
    ballStyle: {
      backgroundImage: `url(${Star})`,
      width: "32px",
      height: "40px",
      backgroundColor: " linear-gradient(92.7deg, #5404FF 7.9%, #BA2AD1 88.1%)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "absolute",
      top: "1750px",
      left: "580px",
      borderRadius: "1px",
    },
  },
  {
    id: 11,
    ballStyle: {
      backgroundImage: `url(${Star})`,
      width: "32px",
      height: "40px",
      backgroundColor: " linear-gradient(92.7deg, #5404FF 7.9%, #BA2AD1 88.1%)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "absolute",
      top: "1940px",
      left: "1220px",
      borderRadius: "1px",
    },
  },
  {
    id: 12,
    ballStyle: {
      backgroundImage: `url(${Line_1})`,
      width: "18.25px",
      height: "26.5px",
      backgroundColor: " linear-gradient(92.7deg, #5404FF 7.9%, #BA2AD1 88.1%)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "absolute",
      top: "1200px",
      left: "600px",
      borderRadius: "1px",
    },
  },
  {
    id: 13,
    ballStyle: {
      backgroundImage: `url(${Line_2})`,
      width: "18.25px",
      height: "17px",
      backgroundColor: " linear-gradient(92.7deg, #5404FF 7.9%, #BA2AD1 88.1%)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "absolute",
      top: "1201px",
      left: "617px",
      borderRadius: "1px",
    },
  },
  {
    id: 14,
    ballStyle: {
      backgroundImage: `url(${Line_3})`,
      width: "18.25px",
      height: "29px",
      backgroundColor: " linear-gradient(92.7deg, #5404FF 7.9%, #BA2AD1 88.1%)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "absolute",
      top: "1214px",
      left: "617px",
      borderRad65ius: "1px",
    },
  },
  {
    id: 15,
    ballStyle: {
      backgroundImage: `url(${Line_4})`,
      width: "18.25px",
      height: "19px",
      backgroundColor: " linear-gradient(92.7deg, #5404FF 7.9%, #BA2AD1 88.1%)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "absolute",
      top: "1224px",
      left: "600px",
      borderRadius: "1px",
    },
  },
  {
    id: 16,
    ballStyle: {
      backgroundImage: `url(${Line_1})`,
      width: "18.25px",
      height: "26.5px",
      backgroundColor: " linear-gradient(92.7deg, #5404FF 7.9%, #BA2AD1 88.1%)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "absolute",
      top: "1150px",
      left: "1100px",
      borderRadius: "1px",
    },
  },
  {
    id: 17,
    ballStyle: {
      backgroundImage: `url(${Line_2})`,
      width: "18.25px",
      height: "17px",
      backgroundColor: " linear-gradient(92.7deg, #5404FF 7.9%, #BA2AD1 88.1%)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "absolute",
      top: "1151px",
      left: "1117px",
      borderRadius: "1px",
    },
  },
  {
    id: 18,
    ballStyle: {
      backgroundImage: `url(${Line_3})`,
      width: "18.25px",
      height: "29px",
      backgroundColor: " linear-gradient(92.7deg, #5404FF 7.9%, #BA2AD1 88.1%)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "absolute",
      top: "1164px",
      left: "1117px",
      borderRad65ius: "1px",
    },
  },
  {
    id: 19,
    ballStyle: {
      backgroundImage: `url(${Line_4})`,
      width: "18.25px",
      height: "19px",
      backgroundColor: " linear-gradient(92.7deg, #5404FF 7.9%, #BA2AD1 88.1%)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "absolute",
      top: "1174px",
      left: "1100px",
      borderRadius: "1px",
    },
  },
];

export default signupBG;
