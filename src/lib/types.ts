export type ExperiencePosition = {
    title: string;
    year: string;
    description: string;
};

export type Experience = {
    company: string;
    positions: ExperiencePosition[];
};
export type Education = {
    institution: string;
    year: string;
};