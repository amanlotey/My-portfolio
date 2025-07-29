// components/Projects.tsx
import { Card, CardContent, CardTitle } from "@/components/ui/Card"

export default function Projects() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        <Card>
          <CardContent className="pt-6">
            <CardTitle>BudgetPal</CardTitle>
            <p className="text-sm text-gray-600 mt-2">
              A personal finance tracker built with React Native, Firebase, and Redux Toolkit.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <CardTitle>TaskHive</CardTitle>
            <p className="text-sm text-gray-600 mt-2">
              A full-stack task management platform using React, Node.js, MongoDB, and Socket.IO.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
