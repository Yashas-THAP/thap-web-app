
import LocalStorage from '../service/LocalStorage'

class AccessControl {

    static permissions(): string[] | null {
        const token = LocalStorage.load('accessToken')
        if (!token) return null
        return JSON.parse(atob(token.split('.')[1])).roleScope.split(' ');
    }

    fetchRoleId = () => {
        const token = LocalStorage.load('accessToken')
        if (!token) return null
        return JSON.parse(atob(token.split('.')[1])).roleId
    }

    isPermitted = (featureScopes: any) => {
        return (function () {
            try {
                const permissions = AccessControl.permissions();
                if (!featureScopes) { return false; }
                if (!permissions) { return false; }
                const status = featureScopes.some((scope: any) => permissions.some((permissionScope) => permissionScope === '!' + scope))
                if (status) { return false }
                if (permissions && (permissions.indexOf('*:*') !== -1)) { return true; }
                return featureScopes.some((scope: any) => permissions.some((permissionScope) => permissionScope === scope));
            } catch { return false; }
        });
    }

    // DASHBOARD SCOPES....
    dashboard = {
        view: this.isPermitted(['dashboard:*', 'dashboard:read']),
    }

    // BOOKING SCOPES..... booking:read booking:create booking:update booking:delete booking:cancel
    bookings = {
        view: this.isPermitted(['booking:*', 'booking:read']),
        create: this.isPermitted(['booking:*', 'booking:create']),
        edit: this.isPermitted(['booking:*','booking:update']),
        delete: this.isPermitted(['booking:*', 'booking:delete']),
        cancel: this.isPermitted(['booking:*', 'booking:cancel']),
    }

    // IRF SCOPES....
    irf = {
        view: this.isPermitted(['irf:*', 'irf:read']),
        create: this.isPermitted(['irf:*', 'irf:create']), // 
        edit: this.isPermitted(['irf:*', 'irf:update']),
        cancel: this.isPermitted(['irf:*', 'irf:cancel']),
        assignment: this.isPermitted(['irf:*', 'irf:assignment']),
        appointment: this.isPermitted(['irf:*', 'irf:appointment']),
        reschedule: this.isPermitted(['irf:*', 'irf:reschedule']),
        submission: this.isPermitted(['irf:*', 'irf:submission']),
        approval: this.isPermitted(['irf:*', 'irf:approval']),
    }

    // SURVEY SCOPES
    survey = {
        view: this.isPermitted(['survey:*', 'survey:read']),
        edit: this.isPermitted(['survey:*', 'survey:update']),
        cancel: this.isPermitted(['survey:*', 'survey:cancel']),
        assignment: this.isPermitted(['survey:*', 'survey:assignment']),
        appointment: this.isPermitted(['survey:*', 'survey:appointment']),
        reschedule: this.isPermitted(['survey:*', 'survey:reschedule']),
        submission: this.isPermitted(['survey:*', 'survey:submission']),
        approval: this.isPermitted(['survey:*', 'survey:approval']),
    }

    //Installation
    installation = {
        view: this.isPermitted(['installation:*', 'installation:read']),
        edit: this.isPermitted(['installation:*', 'installation:update']),
        cancel: this.isPermitted(['installation:*', 'installation:cancel']),
        assignment: this.isPermitted(['installation:*', 'installation:assignment']),
        appointment: this.isPermitted(['installation:*', 'installation:appointment']),
        reschedule: this.isPermitted(['installation:*', 'installation:reschedule']),
        submission: this.isPermitted(['installation:*', 'installation:submission']),
        approval: this.isPermitted(['installation:*', 'installation:approval']),
    }

    //Commissioning 
    commissioning = {
        view: this.isPermitted(['commissioning:*', 'commissioning:read']),
        edit: this.isPermitted(['commissioning:*', 'commissioning:update']),
        cancel: this.isPermitted(['commissioning:*', 'commissioning:cancel']),
        assignment: this.isPermitted(['commissioning:*', 'commissioning:assignment']),
        appointment: this.isPermitted(['commissioning:*', 'commissioning:appointment']),
        reschedule: this.isPermitted(['commissioning:*', 'commissioning:reschedule']),
        submission: this.isPermitted(['commissioning:*', 'commissioning:submission']),
        approval: this.isPermitted(['commissioning:*', 'commissioning:approval']),
    }

    //welcomeCall:* welcomeCall:read welcomeCall:update welcomeCall:delete welcomeCall:approval welcomeCall:appointment
    welcomeCall = {
        view: this.isPermitted(['welcomeCall:*', 'welcomeCall:read']),
        edit: this.isPermitted(['welcomeCall:*', 'welcomeCall:update']),
        cancel: this.isPermitted(['welcomeCall:*', 'welcomeCall:cancel']),
        assignment: this.isPermitted(['welcomeCall:*', 'welcomeCall:assignment']),
        appointment: this.isPermitted(['welcomeCall:*', 'welcomeCall:appointment']),
        reschedule: this.isPermitted(['welcomeCall:*', 'welcomeCall:reschedule']),
        submission: this.isPermitted(['welcomeCall:*', 'welcomeCall:submission']),
        approval: this.isPermitted(['welcomeCall:*', 'welcomeCall:approval']),
    }

    //TICKET:* ticket:read ticket:create ticket:update ticket:delete ticket:cancel ticket:approval ticket:appointment
    ticket = {
        view: this.isPermitted(['ticket:*', 'ticket:read']),
        create: this.isPermitted(['ticket:*', 'ticket:create']),
        edit: this.isPermitted(['ticket:*', 'ticket:update']),
        delete: this.isPermitted(['ticket:*', 'ticket:delete']),
        cancel: this.isPermitted(['ticket:*', 'ticket:cancel']),
        onHold: this.isPermitted(['ticket:*', 'ticket:onHold']),
        underInvestigation: this.isPermitted(['ticket:*', 'ticket:underInvestigation']),
        reOpen: this.isPermitted(['ticket:*', 'ticket:reOpen']),
        close: this.isPermitted(['ticket:*', 'ticket:close']),
        resolution: this.isPermitted(['ticket:*', 'ticket:resolution']),
        appointment: this.isPermitted(['ticket:*', 'ticket:appointment']),
        comment: this.isPermitted(['comment:*','comment:create']),
        activity : {
           create : this.isPermitted(['activity:*','activity:create']),
           assignment : this.isPermitted(['activity:*','activity:assignment']),
           appointment: this.isPermitted(['activity:*','activity:appointment']),
           reschedule : this.isPermitted(['activity:*','activity:reschedule']),
           complete : this.isPermitted(['activity:*','activity:complete']),
           submission : this.isPermitted(['activity:*','activity:submission'])
        }
    }

    //asset:* asset:read 
    asset = {
        view: this.isPermitted(['asset:*', 'asset:read']),
    }

    //salesorder:* salesorder:read 
    salesOrder = {
        view: this.isPermitted(['salesOrder:*', 'salesOrder:read']),
    }

    //*user:read user:create user:update user:delete 
    user = {
        view: this.isPermitted(['user:*', 'user:read']),
        create: this.isPermitted(['user:*', 'user:create']),
        edit: this.isPermitted(['user:*', 'user:update']),
        delete: this.isPermitted(['user:*', 'user:delete']),
    }
    customer={
        view: this.isPermitted(['customer:*', 'customer:read']),
        create: this.isPermitted(['customer:*', 'customer:create']),
        edit: this.isPermitted(['customer:*', 'customer:update']),
        delete: this.isPermitted(['customer:*', 'customer:delete']),
    }

    visit = {
        action: this.isPermitted(['visit:*','visit:action'])
    }

}

const access = new AccessControl();
export default access;