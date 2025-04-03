export interface ISession {
    therapist: string;
    availableSessions: number;
    bookedSessions: number;
    utilization: string;
}

export interface IUserDistribution {
    newUsers: number;
    retainedUsers: number;
}

export interface IDashboardFilter {
    timeRange: string;
    fromDate?: Date;
    toDate?: Date;
}

export type DashboardState = {
    dashboardLoader: boolean;
    sessions: ISession[] | null;
    userDistribution: IUserDistribution | null;
    dashboardFilter: IDashboardFilter;
    error: string | null;
};

export type DashboardAction = {
    type: string;
    dashboardLoader?: boolean;
    sessions?: ISession[] | null;
    userDistribution?: IUserDistribution | null;
    dashboardFilter?: IDashboardFilter;
    error?: string | null;
}; 