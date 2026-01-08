import { HeroSection } from './HeroSection';
import { CardGridSection } from './CardGridSection';
import { ServicesSection } from './ServicesSection';
import { ZonesSection } from './ZonesSection';
import { WhyUsSection } from './WhyUsSection';
import { ClientsSection } from './ClientsSection';
import { ContactSection } from './ContactSection';
import { TrustSection } from './TrustSection';

const componentsMap = {
    HeroSection: HeroSection,
    CardGridSection: CardGridSection,
    ServicesSection: ServicesSection,
    ZonesSection: ZonesSection,
    WhyUsSection: WhyUsSection,
    ClientsSection: ClientsSection,
    ContactSection: ContactSection,
    TrustSection: TrustSection
};

export const DynamicComponent = (props) => {
    if (!props.type) {
        const propsOutput = JSON.stringify(props, null, 2);
        throw new Error(`Object does not have a 'type' property: ${propsOutput}`);
    }

    const Component = componentsMap[props.type];
    if (!Component) {
        throw new Error(`No component is registered for type:'${props.type}`);
    }
    return <Component {...props} />;
};
