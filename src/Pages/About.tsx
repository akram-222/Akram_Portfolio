import { useState, useEffect } from "react";
import EducationTimeLine from "../Components/EducationTimeLine";
import FollowersList from "../Components/FollowersList";
import PageTitle from "../Components/PageTitle";
import Skills from "../Components/Skills";
import Spinner from "../Components/Spinner";
import UserBioCard from "../Components/userBioCard";
import { __getUserInfo } from "../Utils/github/__getUserInfo";
import Profile from "./profile";

const About = ({ onSidebarHide }) => {
  const [userInfo, setUserInfo] = useState<any>({});
  const [isLoad, setLoading] = useState(true);
  useEffect(() => {
    __getUserInfo().then((data) => {
      setUserInfo(data);
      setLoading(false);
    });
  }, []);
  return (
    <div className="animate-fade-in p-2">
      <PageTitle
        className={""}
        onSidebarHide={onSidebarHide}
        title="About"
        subtitle={
          <>
            <span className="text-green-500">Personal Info</span>
          </>
        }
        is_premium={false}
        premium_star="Personal Info"
      />
      <UserBioCard userInfo={userInfo} />
      <Profile />
      {/* <div className="flex gap-2">
        <Skills />
        <EducationTimeLine />
      </div> */}
    </div>
  );
};

export default About;
