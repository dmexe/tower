/// Represents a budget for retrying requests.
///
/// A retry budget is useful for attenuating the amplifying effects
/// of many clients within a process retrying requests multiple
/// times. This acts as a form of coordination between those retries.
pub trait RetryBudget {
  /// Indicates a deposit, or credit, which will typically
  /// permit future withdrawals.
  fn deposit(&mut self);

  /// Check whether or not there is enough balance remaining
  /// to issue a retry, or make a withdrawal.
  ///
  /// If `true`, if the retry is allowed and a withdrawal will take
  /// place.
  /// If `false`, the balance should remain untouched.
  fn try_withdraw(&mut self) -> bool;

  /// The balance or number of retries that can be made now.
  fn balance(&self) -> u64;
}

pub struct EmptyRetryBudget;

impl RetryBudget for EmptyRetryBudget {
  fn deposit(&mut self) {
  }

  fn try_withdraw(&mut self) -> bool {
    false
  }

  fn balance(&self) -> u64 {
    0
  }
}

/// An immutable `RetryBudget` that never has a balance,
/// and as such, will never allow a retry.
pub fn empty() -> EmptyRetryBudget {
  EmptyRetryBudget
}

pub struct InfiniteRetryBudget;

impl RetryBudget for InfiniteRetryBudget {
  fn deposit(&mut self) {
  }

  fn try_withdraw(&mut self) -> bool {
    true
  }

  fn balance(&self) -> u64 {
    100
  }
}

/// An immutable `RetryBudget` that always has a balance of `100`,
/// and as such, will always allow a retry.
pub fn infinite() -> InfiniteRetryBudget {
  InfiniteRetryBudget
}
