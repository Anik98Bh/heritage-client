import NewListedProperties from "../../../components/NewListedProperties/NewListedProperties";
import PopularProperties from "../../../components/PopularProperties/PopularProperties";
import Property from "../../../components/Property/Property";
import Stats from "../../../components/Stats/Stats";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Property></Property>
            <Stats></Stats>
            <PopularProperties></PopularProperties>
            <NewListedProperties></NewListedProperties>
        </div>
    );
};

export default Home;