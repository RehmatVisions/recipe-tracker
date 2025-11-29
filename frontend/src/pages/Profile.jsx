import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user, logout, updateDetails, updatePassword } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        name: user.name || '',
        email: user.email || ''
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      if (formData.newPassword) {
        if (formData.newPassword !== formData.confirmPassword) {
          throw new Error('New passwords do not match');
        }
        await updatePassword({
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword
        });
        setSuccess('Password updated successfully');
      }

      if (formData.name !== user.name || formData.email !== user.email) {
        await updateDetails({
          name: formData.name,
          email: formData.email
        });
        setSuccess(prev => prev ? 'Profile and password updated successfully' : 'Profile updated successfully');
      }
      
      setEditMode(false);
    } catch (error) {
      setError(error.response?.data?.error || error.message || 'Update failed');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-center">
          <p className="mb-4">Please log in to view your profile</p>
          <Link 
            to="/login" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-gray-800">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-orange-500">
            Food<span className="text-orange-500">Box</span>
          </Link>
        </div>
        <div>
          <Link to="/" className="hover:text-orange-500 mx-4">Home</Link>
          <Link to="/recipes" className="hover:text-orange-500 mx-4">Recipes</Link>
          <Link to="/submit" className="hover:text-orange-500 mx-4">Submit Recipe</Link>
          <button 
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded ml-4"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Profile Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gray-700 px-6 py-8 text-center">
            <div className="w-32 h-32 mx-auto rounded-full bg-gray-600 flex items-center justify-center text-4xl font-bold text-white mb-4">
              {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
            </div>
            <h1 className="text-2xl font-bold">{user.name || 'User'}</h1>
            <p className="text-gray-300">{user.email}</p>
            
            <div className="mt-4">
              <button
                onClick={() => setEditMode(!editMode)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded mr-2"
              >
                {editMode ? 'Cancel' : 'Edit Profile'}
              </button>
              {!editMode && (
                <Link 
                  to="/change-password"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Change Password
                </Link>
              )}
            </div>
          </div>

          {/* Profile Details */}
          <div className="p-6">
            {error && (
              <div className="bg-red-500 text-white p-3 rounded mb-4">
                {error}
              </div>
            )}
            
            {success && (
              <div className="bg-green-500 text-white p-3 rounded mb-4">
                {success}
              </div>
            )}

            {editMode ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <h3 className="text-lg font-medium mb-4">Change Password</h3>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Current Password
                    </label>
                    <input
                      type="password"
                      name="currentPassword"
                      value={formData.currentPassword}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      New Password
                    </label>
                    <input
                      type="password"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setEditMode(false)}
                    className="px-4 py-2 border border-gray-600 rounded-md text-white hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded disabled:opacity-50"
                  >
                    {loading ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-300 mb-2">Personal Information</h3>
                    <div className="bg-gray-700 p-4 rounded-lg">
                      <p className="text-gray-400">Name: <span className="text-white ml-2">{user.name}</span></p>
                      <p className="text-gray-400 mt-2">Email: <span className="text-white ml-2">{user.email}</span></p>
                      <p className="text-gray-400 mt-2">Member Since: <span className="text-white ml-2">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </span></p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-300 mb-2">Activity</h3>
                    <div className="bg-gray-700 p-4 rounded-lg">
                      <p className="text-gray-400">Recipes Submitted: <span className="text-white ml-2">
                        {user.submittedRecipes?.length || 0}
                      </span></p>
                      <p className="text-gray-400 mt-2">Recipes Saved: <span className="text-white ml-2">
                        {user.savedRecipes?.length || 0}
                      </span></p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-300 mb-4">Your Recipes</h3>
                  {user.submittedRecipes?.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {user.submittedRecipes.map(recipe => (
                        <div key={recipe._id} className="bg-gray-700 rounded-lg overflow-hidden shadow">
                          <div className="h-40 bg-gray-600">
                            {recipe.image ? (
                              <img 
                                src={recipe.image} 
                                alt={recipe.title}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-gray-400">
                                No Image
                              </div>
                            )}
                          </div>
                          <div className="p-4">
                            <h4 className="font-medium text-white">{recipe.title}</h4>
                            <p className="text-sm text-gray-400 mt-1">
                              {recipe.time} min • {recipe.servings} servings
                            </p>
                            <div className="mt-3 flex justify-between items-center">
                              <span className="text-sm text-orange-400">
                                ★ {recipe.rating?.toFixed(1) || 'N/A'}
                              </span>
                              <Link 
                                to={`/recipe/${recipe._id}`}
                                className="text-sm text-blue-400 hover:underline"
                              >
                                View Recipe
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-gray-700 p-6 rounded-lg text-center">
                      <p className="text-gray-400">You haven't submitted any recipes yet.</p>
                      <Link 
                        to="/submit"
                        className="inline-block mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
                      >
                        Submit Your First Recipe
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
