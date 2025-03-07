import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../BookingForm';

describe('BookingForm', () => {
  const mockAvailableTimes = ["17:00", "18:00", "19:00", "20:00"];
  const mockUpdateTimes = jest.fn();
  const mockSubmitForm = jest.fn();

  const renderBookingForm = () => {
    return render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        updateTimes={mockUpdateTimes}
        submitForm={mockSubmitForm}
      />
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders all required fields', () => {
    renderBookingForm();

    // 必須フィールドの存在確認
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
  });

  test('validates required fields', () => {
    renderBookingForm();

    // フォーム送信
    const submitButton = screen.getByText(/make your reservation/i);
    fireEvent.click(submitButton);

    // エラーメッセージの確認
    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
  });

  test('submits form with valid data', () => {
    renderBookingForm();

    // フォームに有効なデータを入力
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/date/i), {
      target: { value: '2024-02-01' },
    });
    fireEvent.change(screen.getByLabelText(/time/i), {
      target: { value: '17:00' },
    });

    // フォーム送信
    const submitButton = screen.getByText(/make your reservation/i);
    fireEvent.click(submitButton);

    // submitForm関数が呼び出されたことを確認
    expect(mockSubmitForm).toHaveBeenCalledWith(expect.objectContaining({
      name: 'John Doe',
      email: 'john@example.com',
      date: '2024-02-01',
      time: '17:00',
    }));
  });
});