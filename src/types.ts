export interface GeneralInfo {
    fullname: string;
    email: string;
    phoneNumber: string;
}

export interface EducationExp {
    schoolName: string;
    title: string;
    startDate: Date;
    endDate: Date;
}

export interface PracticalExp {
    companyName: string;
    positionTitle: string;
    mainResponsibilities: string;
    startDate: Date;
    endDate: Date;
}
