import { CreditCard, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function FeePaymentCard() {
  const feeDetails = {
    totalFee: 45000,
    paidFee: 30000,
    dueDate: "May 15, 2023",
    nextInstallment: 15000,
  }

  const paymentHistory = [
    {
      id: 1,
      amount: 15000,
      date: "Jan 15, 2023",
      status: "Paid",
      method: "Credit Card",
    },
    {
      id: 2,
      amount: 15000,
      date: "Mar 15, 2023",
      status: "Paid",
      method: "Net Banking",
    },
    {
      id: 3,
      amount: 15000,
      date: "May 15, 2023",
      status: "Pending",
      method: "-",
    },
  ]

  const percentagePaid = Math.round((feeDetails.paidFee / feeDetails.totalFee) * 100)

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">Fee Status</h3>
          <span className="text-sm text-gray-500">Academic Year 2023-24</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Total Fee:</span>
            <span className="font-medium">₹{feeDetails.totalFee.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Paid:</span>
            <span className="font-medium text-green-600">₹{feeDetails.paidFee.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Balance:</span>
            <span className="font-medium text-red-600">
              ₹{(feeDetails.totalFee - feeDetails.paidFee).toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Next Installment Due Date:</span>
            <span className="font-medium">{feeDetails.dueDate}</span>
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>Payment Progress</span>
            <span>{percentagePaid}%</span>
          </div>
          <Progress value={percentagePaid} className="h-2" />
        </div>
        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          <CreditCard className="mr-2 h-4 w-4" />
          Pay Next Installment (₹{feeDetails.nextInstallment.toLocaleString()})
        </Button>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Payment History</h3>
        <div className="space-y-3">
          {paymentHistory.map((payment) => (
            <div key={payment.id} className="flex items-center justify-between rounded-lg border p-3">
              <div className="space-y-1">
                <div className="flex items-center">
                  <span className="font-medium">₹{payment.amount.toLocaleString()}</span>
                  {payment.status === "Paid" ? (
                    <CheckCircle className="ml-2 h-4 w-4 text-green-500" />
                  ) : (
                    <AlertCircle className="ml-2 h-4 w-4 text-yellow-500" />
                  )}
                </div>
                <div className="text-xs text-gray-500">
                  {payment.date} • {payment.method}
                </div>
              </div>
              <div
                className={`rounded-full px-2 py-1 text-xs font-medium ${
                  payment.status === "Paid" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {payment.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
