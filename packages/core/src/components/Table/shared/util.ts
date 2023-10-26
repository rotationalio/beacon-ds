export enum STATUS {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  PENDING = 'pending',
  ERROR = 'error',
  CONFIRMED = 'confirmed',
  UNUSED = 'unused',
  REVOKED = 'revoked',
  COMPLETE = 'complete',
  INCOMPLETE = 'incomplete',
  CANCELLED = 'cancelled',
  ONBOARDING = 'onboarding',
}

export type TStatus =
  | 'Active'
  | 'Inactive'
  | 'Pending'
  | 'Error'
  | 'Confirmed'
  | 'Unused'
  | 'Revoked'
  | 'Complete'
  | 'Incomplete'
  | 'Cancelled'
  | 'Onboarding';

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
