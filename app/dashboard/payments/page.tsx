'use client';

import { useState } from 'react';
import {
  CreditCardIcon,
  ClockIcon,
  BanknotesIcon,
  ChartBarIcon,
  DocumentTextIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  CalendarIcon,
  BellIcon,
  Cog6ToothIcon,
  DocumentArrowDownIcon,
  PlusIcon,
  TrashIcon,
  PencilIcon,
  CheckIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { formatCurrency } from '@/lib/utils/format';

interface PaymentSchedule {
  id: string;
  propertyId: string;
  propertyName: string;
  tenantName: string;
  amount: number;
  frequency: 'weekly' | 'bi-weekly' | 'monthly' | 'quarterly' | 'yearly';
  startDate: string;
  endDate: string;
  status: 'active' | 'paused' | 'completed';
}

interface PaymentMethod {
  id: string;
  type: 'bank' | 'credit_card' | 'cash' | 'other';
  name: string;
  details: string;
  isDefault: boolean;
  processingFee: number;
}

interface PaymentReport {
  id: string;
  period: string;
  totalRevenue: number;
  totalTransactions: number;
  averagePayment: number;
  onTimePayments: number;
  latePayments: number;
  paymentMethods: {
    [key: string]: number;
  };
}

interface PaymentHistory {
  id: string;
  date: string;
  tenantName: string;
  propertyName: string;
  amount: number;
  method: string;
  status: 'completed' | 'pending' | 'failed';
  reference: string;
}

export default function PaymentsPage() {
  const [activeTab, setActiveTab] = useState<'schedule' | 'settings' | 'reports'>('schedule');
  const [paymentSchedules, setPaymentSchedules] = useState<PaymentSchedule[]>([
    {
      id: '1',
      propertyId: '1',
      propertyName: '123 Main St',
      tenantName: 'John Doe',
      amount: 1500,
      frequency: 'monthly',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      status: 'active',
    },
  ]);

  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: '1',
      type: 'bank',
      name: 'Bank Transfer',
      details: 'Chase Bank - ****1234',
      isDefault: true,
      processingFee: 0,
    },
    {
      id: '2',
      type: 'credit_card',
      name: 'Credit Card',
      details: 'Stripe - ****5678',
      isDefault: false,
      processingFee: 2.9,
    },
  ]);

  const [paymentReports, setPaymentReports] = useState<PaymentReport[]>([
    {
      id: '1',
      period: 'January 2024',
      totalRevenue: 15000,
      totalTransactions: 10,
      averagePayment: 1500,
      onTimePayments: 8,
      latePayments: 2,
      paymentMethods: {
        bank: 8,
        credit_card: 2,
      },
    },
  ]);

  const [paymentHistory, setPaymentHistory] = useState<PaymentHistory[]>([
    {
      id: '1',
      date: '2024-01-15',
      tenantName: 'John Doe',
      propertyName: '123 Main St',
      amount: 1500,
      method: 'Bank Transfer',
      status: 'completed',
      reference: 'PAY-123456',
    },
    {
      id: '2',
      date: '2024-01-10',
      tenantName: 'Jane Smith',
      propertyName: '456 Oak Ave',
      amount: 2000,
      method: 'Credit Card',
      status: 'completed',
      reference: 'PAY-123457',
    },
  ]);

  const [isAddingSchedule, setIsAddingSchedule] = useState(false);
  const [newSchedule, setNewSchedule] = useState<Partial<PaymentSchedule>>({
    frequency: 'monthly',
    status: 'active',
  });

  const [lateFeeSettings, setLateFeeSettings] = useState({
    gracePeriod: 5,
    feeType: 'percentage',
    feeAmount: 5,
    maxFee: 100,
  });

  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    sms: false,
    paymentReminders: true,
    latePaymentAlerts: true,
    paymentReceived: true,
  });

  const handleScheduleChange = (scheduleId: string, field: keyof PaymentSchedule, value: any) => {
    setPaymentSchedules(prev =>
      prev.map(schedule =>
        schedule.id === scheduleId ? { ...schedule, [field]: value } : schedule
      )
    );
  };

  const handlePaymentMethodChange = (methodId: string, field: keyof PaymentMethod, value: any) => {
    setPaymentMethods(prev =>
      prev.map(method =>
        method.id === methodId ? { ...method, [field]: value } : method
      )
    );
  };

  const handleLateFeeChange = (field: keyof typeof lateFeeSettings, value: any) => {
    setLateFeeSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleNotificationChange = (field: keyof typeof notificationSettings) => {
    setNotificationSettings(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleAddSchedule = () => {
    if (!newSchedule.propertyName || !newSchedule.tenantName || !newSchedule.amount) return;
    
    const schedule: PaymentSchedule = {
      id: Date.now().toString(),
      propertyId: Date.now().toString(),
      propertyName: newSchedule.propertyName,
      tenantName: newSchedule.tenantName,
      amount: newSchedule.amount,
      frequency: newSchedule.frequency || 'monthly',
      startDate: newSchedule.startDate || new Date().toISOString().split('T')[0],
      endDate: newSchedule.endDate || new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      status: newSchedule.status || 'active',
    };

    setPaymentSchedules(prev => [...prev, schedule]);
    setIsAddingSchedule(false);
    setNewSchedule({});
  };

  const handleDeleteSchedule = (id: string) => {
    setPaymentSchedules(prev => prev.filter(schedule => schedule.id !== id));
  };

  const generateReport = () => {
    // In a real implementation, this would fetch data from the API
    console.log('Generating report...');
  };

  const exportReport = () => {
    // In a real implementation, this would generate and download a CSV/PDF
    console.log('Exporting report...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Payment Management
              </h1>
              <p className="mt-2 text-sm text-gray-500">
                Manage payment schedules, settings, and generate reports.
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('schedule')}
                className={`${
                  activeTab === 'schedule'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
              >
                <CalendarIcon className="h-5 w-5 mr-2" />
                Payment Schedule
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`${
                  activeTab === 'settings'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
              >
                <Cog6ToothIcon className="h-5 w-5 mr-2" />
                Settings
              </button>
              <button
                onClick={() => setActiveTab('reports')}
                className={`${
                  activeTab === 'reports'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
              >
                <ChartBarIcon className="h-5 w-5 mr-2" />
                Reports
              </button>
            </nav>
          </div>
        </div>

        {/* Payment Schedule Tab */}
        {activeTab === 'schedule' && (
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-900">Payment Schedules</h2>
                <button
                  onClick={() => setIsAddingSchedule(true)}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  <PlusIcon className="h-5 w-5 mr-2" />
                  New Schedule
                </button>
              </div>

              {isAddingSchedule && (
                <div className="border rounded-lg p-4 mb-4 bg-gray-50">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Property</label>
                      <input
                        type="text"
                        value={newSchedule.propertyName || ''}
                        onChange={e => setNewSchedule(prev => ({ ...prev, propertyName: e.target.value }))}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter property name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Tenant</label>
                      <input
                        type="text"
                        value={newSchedule.tenantName || ''}
                        onChange={e => setNewSchedule(prev => ({ ...prev, tenantName: e.target.value }))}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter tenant name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Amount</label>
                      <input
                        type="number"
                        value={newSchedule.amount || ''}
                        onChange={e => setNewSchedule(prev => ({ ...prev, amount: parseFloat(e.target.value) }))}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter amount"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Frequency</label>
                      <select
                        value={newSchedule.frequency || 'monthly'}
                        onChange={e => setNewSchedule(prev => ({ ...prev, frequency: e.target.value as any }))}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="weekly">Weekly</option>
                        <option value="bi-weekly">Bi-weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="quarterly">Quarterly</option>
                        <option value="yearly">Yearly</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Start Date</label>
                      <input
                        type="date"
                        value={newSchedule.startDate || new Date().toISOString().split('T')[0]}
                        onChange={e => setNewSchedule(prev => ({ ...prev, startDate: e.target.value }))}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">End Date</label>
                      <input
                        type="date"
                        value={newSchedule.endDate || new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]}
                        onChange={e => setNewSchedule(prev => ({ ...prev, endDate: e.target.value }))}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end space-x-2">
                    <button
                      onClick={() => setIsAddingSchedule(false)}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <XMarkIcon className="h-5 w-5 mr-2" />
                      Cancel
                    </button>
                    <button
                      onClick={handleAddSchedule}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      <CheckIcon className="h-5 w-5 mr-2" />
                      Add Schedule
                    </button>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                {paymentSchedules.map(schedule => (
                  <div key={schedule.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{schedule.propertyName}</h3>
                        <p className="text-sm text-gray-500">{schedule.tenantName}</p>
                      </div>
                      <button
                        onClick={() => handleDeleteSchedule(schedule.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Amount</label>
                        <div className="mt-1 text-lg font-semibold text-gray-900">
                          {formatCurrency(schedule.amount)}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Frequency</label>
                        <div className="mt-1 text-sm text-gray-900 capitalize">{schedule.frequency}</div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Start Date</label>
                        <div className="mt-1 text-sm text-gray-900">
                          {new Date(schedule.startDate).toLocaleDateString()}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">End Date</label>
                        <div className="mt-1 text-sm text-gray-900">
                          {new Date(schedule.endDate).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Payment History</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tenant
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Property
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Method
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Reference
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {paymentHistory.map(payment => (
                      <tr key={payment.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(payment.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {payment.tenantName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {payment.propertyName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {formatCurrency(payment.amount)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {payment.method}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              payment.status === 'completed'
                                ? 'bg-green-100 text-green-800'
                                : payment.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {payment.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {payment.reference}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Payment Reminders</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Email Reminders</h3>
                    <p className="text-sm text-gray-500">Send payment reminders via email</p>
                  </div>
                  <button
                    onClick={() => handleNotificationChange('email')}
                    className={`${
                      notificationSettings.email ? 'bg-blue-600' : 'bg-gray-200'
                    } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                  >
                    <span
                      className={`${
                        notificationSettings.email ? 'translate-x-5' : 'translate-x-0'
                      } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                    />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">SMS Reminders</h3>
                    <p className="text-sm text-gray-500">Send payment reminders via SMS</p>
                  </div>
                  <button
                    onClick={() => handleNotificationChange('sms')}
                    className={`${
                      notificationSettings.sms ? 'bg-blue-600' : 'bg-gray-200'
                    } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                  >
                    <span
                      className={`${
                        notificationSettings.sms ? 'translate-x-5' : 'translate-x-0'
                      } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Payment Methods</h2>
              <div className="space-y-4">
                {paymentMethods.map(method => (
                  <div key={method.id} className="border rounded-lg p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Type</label>
                        <select
                          value={method.type}
                          onChange={e => handlePaymentMethodChange(method.id, 'type', e.target.value)}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                          <option value="bank">Bank Transfer</option>
                          <option value="credit_card">Credit Card</option>
                          <option value="cash">Cash</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Processing Fee (%)</label>
                        <input
                          type="number"
                          value={method.processingFee}
                          onChange={e => handlePaymentMethodChange(method.id, 'processingFee', parseFloat(e.target.value))}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Late Fee Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Grace Period (days)</label>
                  <input
                    type="number"
                    value={lateFeeSettings.gracePeriod}
                    onChange={e => handleLateFeeChange('gracePeriod', parseInt(e.target.value))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Fee Type</label>
                  <select
                    value={lateFeeSettings.feeType}
                    onChange={e => handleLateFeeChange('feeType', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="percentage">Percentage</option>
                    <option value="fixed">Fixed Amount</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Fee Amount</label>
                  <input
                    type="number"
                    value={lateFeeSettings.feeAmount}
                    onChange={e => handleLateFeeChange('feeAmount', parseFloat(e.target.value))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Maximum Fee</label>
                  <input
                    type="number"
                    value={lateFeeSettings.maxFee}
                    onChange={e => handleLateFeeChange('maxFee', parseFloat(e.target.value))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Notification Settings</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Payment Reminders</h3>
                    <p className="text-sm text-gray-500">Send reminders before payment due dates</p>
                  </div>
                  <button
                    onClick={() => handleNotificationChange('paymentReminders')}
                    className={`${
                      notificationSettings.paymentReminders ? 'bg-blue-600' : 'bg-gray-200'
                    } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                  >
                    <span
                      className={`${
                        notificationSettings.paymentReminders ? 'translate-x-5' : 'translate-x-0'
                      } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                    />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Late Payment Alerts</h3>
                    <p className="text-sm text-gray-500">Get notified when payments are overdue</p>
                  </div>
                  <button
                    onClick={() => handleNotificationChange('latePaymentAlerts')}
                    className={`${
                      notificationSettings.latePaymentAlerts ? 'bg-blue-600' : 'bg-gray-200'
                    } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                  >
                    <span
                      className={`${
                        notificationSettings.latePaymentAlerts ? 'translate-x-5' : 'translate-x-0'
                      } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                    />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Payment Received</h3>
                    <p className="text-sm text-gray-500">Get notified when payments are received</p>
                  </div>
                  <button
                    onClick={() => handleNotificationChange('paymentReceived')}
                    className={`${
                      notificationSettings.paymentReceived ? 'bg-blue-600' : 'bg-gray-200'
                    } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                  >
                    <span
                      className={`${
                        notificationSettings.paymentReceived ? 'translate-x-5' : 'translate-x-0'
                      } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Reports Tab */}
        {activeTab === 'reports' && (
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-900">Payment Analytics</h2>
                <div className="flex space-x-2">
                  <button
                    onClick={generateReport}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    <DocumentTextIcon className="h-5 w-5 mr-2" />
                    Generate Report
                  </button>
                  <button
                    onClick={exportReport}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                  >
                    <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
                    Export
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {paymentReports.map(report => (
                  <div key={report.id} className="bg-white rounded-lg shadow p-4">
                    <h3 className="text-sm font-medium text-gray-900">{report.period}</h3>
                    <div className="mt-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Total Revenue</span>
                        <span className="text-sm font-medium text-gray-900">
                          {formatCurrency(report.totalRevenue)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-sm text-gray-500">Transactions</span>
                        <span className="text-sm font-medium text-gray-900">
                          {report.totalTransactions}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-sm text-gray-500">On Time</span>
                        <span className="text-sm font-medium text-green-600">
                          {report.onTimePayments}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-sm text-gray-500">Late</span>
                        <span className="text-sm font-medium text-red-600">
                          {report.latePayments}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="text-sm font-medium text-gray-900 mb-4">Payment Method Distribution</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(paymentReports[0].paymentMethods).map(([method, count]) => (
                    <div key={method} className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{
                            width: `${(count / paymentReports[0].totalTransactions) * 100}%`,
                          }}
                        ></div>
                      </div>
                      <span className="ml-2 text-sm text-gray-500">
                        {method.charAt(0).toUpperCase() + method.slice(1)}: {count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 