const MONTHS: [u32; 12] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

/// Check if the given year is a leap year
fn is_leap_year(year: u32) -> bool {
    year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)
}

/// Get days up to the given month
fn days_up_to_month(month: u32, year: u32) -> u32 {
    let mut days = 0;
    for i in 0..month - 1 {
        days += MONTHS[i as usize];
    }
    if month > 2 && is_leap_year(year) {
        days += 1;
    }
    days
}

/// Convert standard date format to Julian date
/// The standard date format is `YYYY-MM-DD`
/// The Julian date format is `YYYYDDD`
fn convert_standard_date_to_julian_date(standard_date: &str) -> String {
    let parts: Vec<&str> = standard_date.split('-').collect();
    if let (Ok(year), Ok(month), Ok(day)) = (
        parts[0].parse::<u32>(),
        parts[1].parse::<u32>(),
        parts[2].parse::<u32>(),
    ) {
        let days = day + days_up_to_month(month, year);

        format!("{}{:03}", year, days)
    } else {
        "Invalid date format".to_string()
    }
}

// Convert Julian date format to standard date
/// The standard date format is `YYYY-MM-DD`
/// The Julian date format is `YYYYDDD`
fn convert_julian_date_to_standard_date(julian_date: &str) -> String {
    if julian_date.len() != 7 {
        return "Invalid date format".to_string();
    }
    let year = &julian_date[0..4];
    let days = &julian_date[4..7];

    if let (Ok(year), Ok(days)) = (year.parse::<u32>(), days.parse::<u32>()) {
        if days == 0 {
            return "Invalid date format".to_string();
        }
        let mut day = days;
        let mut month = 0;
        for (i, &month_days) in MONTHS.iter().enumerate() {
            if i == 1 && is_leap_year(year) {
                day -= 1;
            }

            if day <= month_days {
                month = i as u32 + 1;
                break;
            }
            day -= month_days;
        }

        format!("{}-{:02}-{:02}", year, month, day)
    } else {
        "Invalid date format".to_string()
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_standard_date_to_julian_date() {
        assert_eq!(
            convert_standard_date_to_julian_date("2023-06-10"),
            "2023161"
        );

        assert_eq!(
            convert_standard_date_to_julian_date("2023-12-31"),
            "2023365"
        );

        assert_eq!(
            convert_standard_date_to_julian_date("2024-01-01"),
            "2024001"
        );

        assert_eq!(
            convert_standard_date_to_julian_date("2024-12-31"),
            "2024366"
        );

        assert_eq!(
            convert_standard_date_to_julian_date("2025-01-01"),
            "2025001"
        );
    }

    #[test]
    fn test_julian_date_to_standard_date() {
        assert_eq!(
            convert_julian_date_to_standard_date("2023161"),
            "2023-06-10"
        );

        assert_eq!(
            convert_julian_date_to_standard_date("2023365"),
            "2023-12-31"
        );

        assert_eq!(
            convert_julian_date_to_standard_date("2024001"),
            "2024-01-01"
        );

        assert_eq!(
            convert_julian_date_to_standard_date("2024366"),
            "2024-12-31"
        );

        assert_eq!(
            convert_julian_date_to_standard_date("2025001"),
            "2025-01-01"
        );

        assert_eq!(
            convert_julian_date_to_standard_date("2025000"),
            "Invalid date format"
        );
    }
}
