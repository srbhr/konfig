/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A User who is purchasing from the pet store
 */
export type User = {
    id?: number;
    username?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    phone?: string;
    /**
     * User Status
     */
    userStatus?: number;
};

