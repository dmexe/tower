extern crate tower_retry;

use tower_retry::{RetryBudget, retry_budget};

#[test]
fn empty_retry_budget_should_be_empty() {
  let mut empty = retry_budget::empty();
  assert_eq!(0, empty.balance());
  assert_eq!(false, empty.try_withdraw());

  empty.deposit();
  assert_eq!(0, empty.balance());
  assert_eq!(false, empty.try_withdraw());
}

#[test]
fn infinite_retry_budget_should_be_infinite() {
  let mut infinite = retry_budget::infinite();
  assert_eq!(100, infinite.balance());
  assert_eq!(true, infinite.try_withdraw());

  infinite.deposit();
  assert_eq!(100, infinite.balance());
  assert_eq!(true, infinite.try_withdraw());
}
