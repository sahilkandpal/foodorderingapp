import { useState } from "react";
import Footer from "../../components/common/footer";
import Header from "../../components/common/header";
import TabOptions from "../../components/common/tabOptions";
import Delivery from "../../components/delivery";
import DiningOut from "../../components/diningOut";
import Nightlife from "../../components/nightlife";

function Home(){
    const [activeTab, setActiveTab] = useState("Delivery");
    return <>
        <Header />
        <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
        {getCorrectScreen(activeTab)}
        <Footer />
    </>
    
};
const getCorrectScreen=(tab)=>{
    switch(tab){
        case "Delivery":
        return <Delivery />;
        case "Dining Out":
        return <DiningOut />;
        case "Nightlife":
        return <Nightlife />;
        default:
        return <Delivery />;


        
    }
}

export default Home;