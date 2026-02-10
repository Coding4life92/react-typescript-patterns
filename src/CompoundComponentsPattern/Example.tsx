import React, { useState, type ReactNode, type ReactElement } from "react";

interface TabProps {
    label: string;
    children: ReactNode;
}

const Tab: React.FC<TabProps> = ({ children }) => {
    return <>{children}</>;
}

interface TabsProps {
    children: ReactElement<TabProps> | ReactElement<TabProps>[];
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <div className="tab-header">
                {React.Children.map(children, (child, index) => {
                    if (React.isValidElement(child)) {
                        return (
                            <div
                                className={`tab-item ${index === activeTab ? 'active' : ''}`}
                                onClick={() => setActiveTab(index)}
                            >
                                {child.props.label}
                            </div>
                        );
                    }
                })}
            </div>
            <div className="tab-content">
                {React.Children.map(children, (child, index) => {
                    if (index === activeTab) {
                        return <>{child}</>
                    }
                })}
            </div>
        </div>
    );
};

const Example: React.FC = () => {
    return (
        <Tabs>
            <Tab label="Tab 1">
                <div>Tab item 1</div>
            </Tab>
            <Tab label="Tab 2">
                <div>Tab item 2</div>
            </Tab>
            <Tab label="Tab 3">
                <div>Tab item 3</div>
            </Tab>
        </Tabs>
    );
};

export default Example;