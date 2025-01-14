// eslint-disable-next-line react/prop-types
const SectionTitle = ({text}) => {
    return (
        <div>
            <h1 className="text-xl md:text-3xl font-semibold text-center my-5 md:my-8">{text}</h1>
        </div>
    );
};

export default SectionTitle;