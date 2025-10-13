import React, { ComponentType } from "react";

export type TechItem = {
  key: string;
  Icon: ComponentType<{ className?: string }>;
};

type stack_props = {
    tech_stack?: readonly TechItem[];
}

const Stack = ({tech_stack}: stack_props) => {
  return (
    <>
        {tech_stack?.map(({key, Icon}) => (
            <div key={key}
            className="flex items-center p-3 md:p-2.5 bg-neutral-300 dark:bg-neutral-900 border border-accent/40 text-black/75 dark:text-white
                        rounded-full text-xs hover:border-blue-600 transition-colors duration-700">
            <Icon className="w-5 h-5 md:w-4 md:h-4" />
            </div>
        ))}
    </>
  )
}

export default Stack
