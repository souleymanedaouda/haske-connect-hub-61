
import Courses from '@/components/courses/Courses';

const CoursesPage = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-haske-dark-orange">Formations</h1>
        <Courses />
      </div>
    </div>
  );
};

export default CoursesPage;
