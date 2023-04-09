#include <cstddef>
#include <cmath>
#include <vector>
#include <initializer_list>

class Matrix
{
    std::vector<int> m_data;
    int m_size{};

public:
    Matrix() = default;
    Matrix(std::initializer_list<int> l);

    int determinant();
    void set_elements(std::initializer_list<int> l);
    bool is_squared(int num);
    Matrix adjoint();
    int size() const { return m_size; }
    Matrix get_submatrix(int i, int k) const;

    int operator[](std::size_t idx) const { return (idx >= 0 && idx < m_data.size()) ? m_data.at(idx) : 0; }

private:
    void add_last(int element);
};

int Matrix::determinant()
{
    if (m_size == 1)
    {
        return m_data[0];
    }
    int sign, det = 0;
    for (int r, c, i = 0; i < m_data.size() / 2; i++)
    {
        r = static_cast<int>(i / m_size);
        c = i % m_size;
        auto sub_matrix = get_submatrix(r, c);
        sign = ((r + c) % 2 == 0) ? 1 : -1;
        det += sign * m_data.at(i) * sub_matrix.determinant();
    }
    return det;
}

Matrix Matrix::get_submatrix(int r, int c) const
{
    Matrix m;
    for (int i = 0; i < m_data.size(); i++)
    {
        if (r == static_cast<int>(i / m_size) || c == i % m_size)
        {
            continue;
        }
        m.add_last(m_data.at(i));
    }
    return m;
}

bool Matrix::is_squared(int num)
{
    auto sqrt_num = static_cast<int>(std::sqrt(num));
    return num == (sqrt_num * sqrt_num);
}

void Matrix::add_last(int element)
{
    m_data.push_back(element);
    m_size = static_cast<int>(std::sqrt(m_data.size()));
}

Matrix Matrix::adjoint()
{
    Matrix adjoint_matrix;

    if (m_size == 1)
    {
        adjoint_matrix.set_elements({1});
    }
    for (int sign, c, r, i = 0; i < m_data.size(); i++)
    {
        r = static_cast<int>(i / m_size);
        c = i % m_size;
        auto sub_matrix = get_submatrix(r, c);
        sign = ((r + c) % 2 == 0) ? 1 : -1;
        adjoint_matrix.add_last(sign * sub_matrix.determinant());
    }

    return adjoint_matrix;
}

void Matrix::set_elements(std::initializer_list<int> l)
{
    if (!is_squared(l.size()))
    {
        return;
    }
    m_data.insert(m_data.begin(), l);
    m_size = std::sqrt(l.size());
}
