import { Fragment } from "react";
import TheHeader from "../../layout/header/TheHeader";
import BlogsSection from "./blogs/BlogsSection";
import TabsSection from "./tabs/TabsSection";
import UsersSection from "./users/UsersSections";


export default function Home(){

  return (
    <Fragment>
      <TheHeader />

        <main>
        <BlogsSection />
        <TabsSection />
        <UsersSection />
        </main>
    </Fragment>
    
  );
}
